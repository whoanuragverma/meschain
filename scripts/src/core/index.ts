import Blockchain from "./blockchain";

self.addEventListener("message", (e) => {
    switch (e.data.cmd) {
        case "NEW":
            Blockchain.new(e.data.msg);
            break;
        case "CHAIN":
            //@ts-ignore
            self.postMessage(Blockchain);
    }
});
