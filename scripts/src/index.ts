import Peer from "./peer";
import User from "./user";
export {};
declare global {
    interface Window {
        Peer: any;
        User: any;
    }
}

window.User = User;
window.Peer = Peer;
