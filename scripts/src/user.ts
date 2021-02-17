import * as nacl from "tweetnacl";
import * as util from "tweetnacl-util";
import { sha256 } from "js-sha256";
interface user {
    username?: string;
    publicKey: string;
    secretKey: string;
    keyHash: string;
}
interface publicInfo {
    username?: string;
    publicKey: string;
    keyHash: string;
}
class User {
    private userInfo: user;
    public keyHash: string;
    public whoami: publicInfo;
    constructor(
        publicKey?: string,
        secretKey?: string,
        private username?: string
    ) {
        const kp = nacl.box.keyPair();
        this.userInfo = {
            username: this.username,
            publicKey: publicKey || util.encodeBase64(kp.publicKey),
            secretKey: secretKey || util.encodeBase64(kp.secretKey),
            keyHash: `0x${sha256(publicKey || kp.publicKey)}`,
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
