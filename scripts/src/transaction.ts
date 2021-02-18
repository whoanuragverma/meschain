import * as nacl from "tweetnacl";
import * as util from "tweetnacl-util";
import { sha256 } from "js-sha256";

interface T {
    timestamp: number;
    message: string;
    hash: string;
    signature: string;
    to: string;
    offset: string;
    seed: string;
}
interface D {
    timestamp: number;
    message: string;
    hash: string;
    signature: boolean;
}
function encrypt(pk: string, sk: string, message: string, to: string): T {
    const nonce = nacl.randomBytes(24);
    const msg = nacl.box(
        util.decodeUTF8(message),
        nonce,
        util.decodeBase64(pk),
        util.decodeBase64(sk)
    );
    const sigK = nacl.sign.keyPair();
    const sig = nacl.sign.detached(msg, sigK.secretKey);
    const ts = new Date().getTime();
    const res: T = {
        timestamp: ts,
        message: util.encodeBase64(msg),
        hash: sha256(
            util.encodeBase64(msg) + util.encodeBase64(nonce) + sk + pk + ts
        ),
        signature: util.encodeBase64(sig),
        to: to,
        offset: util.encodeBase64(sigK.publicKey),
        seed: util.encodeBase64(nonce),
    };
    return res;
}

function decrypt(pk: string, sk: string, data: T): D {
    const msg = nacl.box.open(
        util.decodeBase64(data.message),
        util.decodeBase64(data.seed),
        util.decodeBase64(pk),
        util.decodeBase64(sk)
    );
    if (!msg) {
        throw new Error(
            "Decryption failed - Either message is malformed or signature doesn't match"
        );
        return;
    }
    const sig = nacl.sign.detached.verify(
        util.decodeBase64(data.message),
        util.decodeBase64(data.signature),
        util.decodeBase64(data.offset)
    );
    if (!sig) {
        throw new Error("Message signature mismatch - Handle with caution");
    }
    return {
        message: util.encodeUTF8(msg),
        timestamp: data.timestamp,
        hash: data.hash,
        signature: sig,
    };
}
function verify(msg: string, pk: string, sig: string) {
    return nacl.sign.detached.verify(
        util.decodeBase64(msg),
        util.decodeBase64(sig),
        util.decodeBase64(pk)
    );
}
export { encrypt, decrypt, verify };
