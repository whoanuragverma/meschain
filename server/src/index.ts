import express from "express";
import { ExpressPeerServer } from "peer";
import PeerList from "./peers";
import cors from "cors";
import path from "path";
require("dotenv").config();
const PORT = process.env.PORT || 3000;
const app = express();
app.use(cors());
app.enable("trust proxy");
app.use(express.static(path.join(__dirname, "../static")));
const http = require("http").Server(app);
http.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`);
});
const peerServer = ExpressPeerServer(http, {
    path: "/",
});
const io = require("socket.io")(http, {
    cors: {
        origin: "*",
        method: ["GET", "POST"],
    },
});
peerServer.on("connection", (id) => {
    PeerList.connect(id.getId());
    io.emit("UPDATE", PeerList);
});
peerServer.on("disconnect", (id) => {
    PeerList.disconnect(id.getId());
    io.emit("DISCONNECT", id.getId());
});
app.use("/peerServer", peerServer);
app.get("/peers", (_req, res) => {
    res.json({ connections: PeerList.length, clients: PeerList });
});
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../template", "index.html"));
});
