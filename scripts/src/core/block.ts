import { sha256 } from "js-sha256";
class Block {
    // Difficulty
    public difficulty = 4;
    public hash: string;
    private nonce: number = 0;
    constructor(private data: any, private previousHash: string) {
        this.hash = sha256(JSON.stringify(data) + previousHash + this.nonce);
    }
    public mine() {
        while (
            (
                this.hash
                    .substr(0, this.difficulty)
                    .match(new RegExp("0", "g")) || []
            ).length != this.difficulty
        ) {
            this.nonce++;
            this.hash = sha256(
                JSON.stringify(this.data) + this.previousHash + this.nonce
            );
        }
        return this.nonce;
    }
}

export default Block;
