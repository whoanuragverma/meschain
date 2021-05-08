"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const peer_1 = require("peer");
const peers_1 = __importDefault(require("./peers"));
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
require("dotenv").config();
const PORT = process.env.PORT || 3001;
const app = express_1.default();
app.use(cors_1.default());
app.enable("trust proxy");
app.use(express_1.default.static(path_1.default.join(__dirname, "../static")));
const http = require("http").Server(app);
http.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`);
});
const peerServer = peer_1.ExpressPeerServer(http, {
    path: "/",
});
const io = require("socket.io")(http, {
    cors: {
        origin: "*",
        method: ["GET", "POST"],
    },
});
peerServer.on("connection", (id) => {
    peers_1.default.connect(id.getId());
    io.emit("UPDATE", peers_1.default);
});
peerServer.on("disconnect", (id) => {
    peers_1.default.disconnect(id.getId());
    io.emit("DISCONNECT", id.getId());
});
app.use("/peerServer", peerServer);
app.get("/peers", (_req, res) => {
    res.json({ connections: peers_1.default.length, clients: peers_1.default });
});
app.get("/", (req, res) => {
    res.sendFile(path_1.default.join(__dirname, "../template", "index.html"));
});
