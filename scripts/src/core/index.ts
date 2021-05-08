import Blockchain from "./blockchain";

self.addEventListener("message", (e) => {
    switch (e.data.cmd) {
        case "NEW":
            //@ts-ignore
            self.postMessage({
                type: "TIME",
                time: Blockchain.new(e.data.msg),
            });
            //@ts-ignore
            self.postMessage({ chain: Blockchain, type: "MINED" }); // Temporoary solution for testing
            break;
        case "CHAIN":
            //@ts-ignore
            self.postMessage({ chain: Blockchain, type: "LOG" });
            break;
        case "UPDATE":
            // Ideally run a consensus algorithm before simply purging the original Blockchain
            Blockchain.splice(0, Blockchain.length);
            Blockchain.splice(0, 0, ...e.data.msg);
            //@ts-ignore
            self.postMessage({ chain: Blockchain, type: "UPDATE" });
    }
});
