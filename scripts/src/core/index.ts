import Blockchain from "./blockchain";

self.addEventListener("message", (e) => {
    switch (e.data.cmd) {
        case "NEW":
            Blockchain.new(e.data.msg);
            //@ts-ignore
            self.postMessage(Blockchain); // Temporoary solution for testing
            break;
        case "CHAIN":
            //@ts-ignore
            self.postMessage(Blockchain);
            break;
        case "UPDATE":
            // Ideally run a consensus algorithm before simply puring the original Blockchain
            Blockchain.splice(0, Blockchain.length);
            Blockchain.splice(0, 0, ...e.data.msg);
            //@ts-ignore
            self.postMessage(Blockchain);
    }
});
