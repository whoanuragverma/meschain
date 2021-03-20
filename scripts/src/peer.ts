import peer from "peerjs";
import { BehaviorSubject, fromEvent, Observable } from "rxjs";
import { io } from "socket.io-client";
/**
 * @public id - Observable for the peerID
 * @function broadCast - Send Message to all clients
 * @yields message - Observable of messages
 * @yields numConnections - Observable of connections
 * Wrapper around the actual peer.js library
 */
class Peer {
    private peer: any;
    private peerID: any;
    public id: Observable<string>;
    private subs = new BehaviorSubject(0);
    public numConnections: Observable<number> = this.subs.asObservable();
    private message$ = new BehaviorSubject("");
    public message: Observable<string> = this.message$.asObservable();
    private logger$ = new BehaviorSubject("");
    public logger: Observable<string> = this.logger$.asObservable();
    private identity$ = new BehaviorSubject("");
    public identity: Observable<string> = this.identity$.asObservable();
    private connections: any = {};
    private socket: any;
    /**
     *
     * @param id - optional - Peer ID of the Client
     */
    constructor(id: string, public whoami: any) {
        this.peer = new peer(id, {
            host: window.location.hostname.includes("localhost")
                ? "localhost"
                : "/",
            port: window.location.hostname.includes("localhost")
                ? 3000
                : parseInt(window.location.port) || 443,
            path: "peerServer",
            config: {
                iceServers: [
                    { urls: "stun:stun.l.google.com:19302" },
                    {
                        urls: process.env.TURN_SERVER,
                        username: process.env.TURN_USER,
                        credential: process.env.TURN_PASS,
                    },
                ],
            },
        });

        this.id = fromEvent(this.peer, "open");
        fromEvent(this.peer, "open").subscribe((data) => (this.peerID = data));
        this.peer.on("connection", (conn: any) => {
            this.connections[conn["peer"]] = conn;
            this.subs.next(Object.keys(this.connections).length);
            conn.on("data", (data: any) => {
                this.handler(JSON.parse(data));
            });
        });
        this.socket = io(
            window.location.hostname.includes("localhost")
                ? "localhost:3000"
                : window.location.hostname
        );
        this.socket.on("UPDATE", (data: any) => {
            // Connect with new clients
            for (let i = 0; i < data.length; i++) {
                if (
                    data[i] != this.peerID &&
                    !Object.keys(this.connections).includes(data[i])
                ) {
                    this.connect(data[i]);
                }
            }
            this.subs.next(Object.keys(this.connections).length);
        });
        this.socket.on("DISCONNECT", (data: any) => {
            delete this.connections[data];
            this.logger$.next("Disconnected with client: " + data);
            this.subs.next(Object.keys(this.connections).length);
        });
    }
    private connect(id: string) {
        const conn = this.peer.connect(id);
        this.connections[id] = conn;
        conn.on("open", () => {
            this.logger$.next("Connected with client: " + id);
            conn.on("data", (data: any) => {
                this.handler(JSON.parse(data));
            });
        });
    }
    private handler(data: any) {
        switch (data.data.type) {
            case "WHO":
                // Peer asks who are you? You reply and ask who are you?
                this.privateMSG(this.whoami, data.from, "IDENTITY");
                this.privateMSG(undefined, data.from, "HANDSHAKE");
                break;
            case "IDENTITY":
                this.identity$.next(JSON.stringify(data));
                break;
            case "HANDSHAKE":
                this.privateMSG(this.whoami, data.from, "IDENTITY");
                break;
            case "BLOCK":
                (window as any).w.postMessage(data.message);
            default:
                console.log(data);
        }
    }
    /**
     *
     * @param message Message to be Sent
     */
    public broadCast(message: string, type: string) {
        Object.keys(this.connections).forEach((el) => {
            this.connections[el].send(
                JSON.stringify({
                    from: this.peerID,
                    data: {
                        type: type,
                        message: message,
                    },
                })
            );
        });
    }
    public privateMSG(message: string, to: string, type: string) {
        this.connections[to].send(
            JSON.stringify({
                from: this.peerID,
                data: {
                    type: type,
                    message: message,
                },
            })
        );
    }
}

export default Peer;
