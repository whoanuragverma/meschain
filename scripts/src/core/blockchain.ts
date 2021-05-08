import Block from "./block";
import * as nacl from "tweetnacl";
import * as util from "tweetnacl-util";
function verify(msg: string, pk: string, sig: string) {
    return nacl.sign.detached.verify(
        util.decodeBase64(msg),
        util.decodeBase64(sig),
        util.decodeBase64(pk)
    );
}
interface T {
    timestamp: number;
    message: string;
    hash: string;
    signature: string;
    to: string;
    from: string;
    offset: string;
    seed: string;
}
class Blockchain extends Array<Block> {
    constructor() {
        super();
    }
    new(data: T) {
        if (!verify(data.message, data.offset, data.signature))
            throw new Error("Invalid Message Signature for incoming data");
        const start = new Date().getTime();
        const block = new Block(
            data,
            this.length >= 1 ? this[this.length - 1].hash : ""
        );
        this.push(block);
        this.mine();
        const end = new Date().getTime();
        return `Mined new block in ${end - start}ms`;
    }
    mine() {
        if (this.length == 0) {
            throw new Error("Cannot mine empty blockchain");
        }
        // Mine the newest node
        this[this.length - 1].mine();
    }
}

export default new Blockchain();
