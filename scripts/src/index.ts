import Peer from "./peer";

export {};
declare global {
    interface Window {
        Peer: any;
    }
}

window.Peer = Peer;
