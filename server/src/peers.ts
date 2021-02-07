/**
 * Shared array of list of connected peers
 * @exports PeerList -  Extends Default Array Object with new methods connect() and disconnect()
 */
class PeerList extends Array<string> {
    /**
     *
     * @param id PeerID that was connected
     */
    connect(id: string) {
        this.push(id);
    }
    /**
     *
     * @param id PeerID of client that was disconnected
     */
    disconnect(id: string) {
        if (this.includes(id)) this.splice(this.indexOf(id), 1);
    }
}

export default new PeerList();
