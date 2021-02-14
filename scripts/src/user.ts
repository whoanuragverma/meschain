import * as nacl from "tweetnacl";
import { sha256 } from "js-sha256";
interface user {
    username?: string;
    publicKey: Uint8Array;
    secretKey: Uint8Array;
    keyHash: string;
}
interface publicInfo {
    username?: string;
    publicKey: Uint8Array;
    keyHash: string;
}
class User {
    private userInfo: user;
    public keyHash: string;
    public whoami: publicInfo;
    constructor(
        private publicKey?: Uint8Array,
        private secretKey?: Uint8Array,
        private username?: string
    ) {
        const kp = nacl.box.keyPair();
        this.userInfo = {
            username: this.username,
            publicKey: this.publicKey || kp.publicKey,
            secretKey: this.secretKey || kp.secretKey,
            keyHash: `0x${sha256(this.publicKey || kp.publicKey)}`,
        };
        this.keyHash = this.userInfo.keyHash;
        this.whoami = {
            username: this.username,
            publicKey: this.userInfo.publicKey,
            keyHash: this.keyHash,
        };
    }
}
export default User;
