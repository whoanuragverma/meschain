"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Shared array of list of connected peers
 * @exports PeerList -  Extends Default Array Object with new methods connect() and disconnect()
 */
class PeerList extends Array {
    /**
     *
     * @param id PeerID that was connected
     */
    connect(id) {
        this.push(id);
    }
    /**
     *
     * @param id PeerID of client that was disconnected
     */
    disconnect(id) {
        if (this.includes(id))
            this.splice(this.indexOf(id), 1);
    }
}
exports.default = new PeerList();
