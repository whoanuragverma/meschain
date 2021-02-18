import Peer from "./peer";
import User from "./user";
import { encrypt, decrypt, verify } from "./transaction";
export {};
declare global {
    interface Window {
        Peer: any;
        User: any;
        encrypt: any;
        decrypt: any;
        verify: any;
    }
}

window.User = User;
window.Peer = Peer;
window.verify = verify;
window.decrypt = decrypt;
window.encrypt = encrypt;
