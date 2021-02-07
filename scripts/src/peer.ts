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
    private connections: any = {};
    private socket: any;
    /**
     *
     * @param id - optional - Peer ID of the Client
     */
    constructor(id?: string) {
        this.peer = new peer(id, {
            host: "/",
            path: "peerServer",
        });

        this.id = fromEvent(this.peer, "open");
        fromEvent(this.peer, "open").subscribe((data) => (this.peerID = data));
        this.peer.on("connection", (conn: any) => {
            this.connections[conn["peer"]] = conn;
            this.subs.next(Object.keys(this.connections).length);
            conn.on("data", (data: any) => {
                this.message$.next(data);
            });
        });
        this.socket = io("http://localhost:3000");
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
            console.log("Disconnected with client: " + data);
            this.subs.next(Object.keys(this.connections).length);
        });
    }
    private connect(id: string) {
        const conn = this.peer.connect(id);
        this.connections[id] = conn;
        conn.on("open", () => {
            console.log("Connected with client: " + id);
            conn.on("data", (data: any) => {
                this.message$.next(data);
            });
        });
    }
    /**
     *
     * @param message Message to be Sent
     */
    public broadCast(message: string) {
        Object.keys(this.connections).forEach((el) => {
            this.connections[el].send(
                JSON.stringify({ from: this.peerID, data: message })
            );
        });
    }
}

export default Peer;
