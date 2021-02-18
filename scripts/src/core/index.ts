import Blockchain from "./blockchain";

self.addEventListener("message", (e) => {
    switch (e.data.cmd) {
        case "NEW":
            Blockchain.new(e.data.msg);
            break;
        case "CHAIN":
            self.postMessage(Blockchain, "target");
    }
});
