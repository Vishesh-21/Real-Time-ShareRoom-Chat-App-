import express from "express";
import http from "http";
import { WebSocketServer } from "ws";
import cors from "cors";
import dotenv from "dotenv";
import Message from "./models/messageSchema.js";
import connect from "./config/connection.js";

dotenv.config();
const app = express();
const server = http.createServer(app);
const wss = new WebSocketServer({ server });

app.use(cors());
app.use(express.json());

// to make connection with database
connect();

// to make a websocket connection
wss.on("connection", async (ws) => {
  let username = "";

  ws.on("message", async (data) => {
    const parsed = JSON.parse(data);
    if (parsed.type === "join") {
      username = parsed.username;
      const messages = await Message.find()
        .sort({ createdAt: -1 })
        .limit(50)
        .lean();
      ws.send(
        JSON.stringify({ type: "history", messages: messages.reverse() })
      );
    } else if (parsed.type === "message") {
      const msg = new Message({ username, message: parsed.message });
      await msg.save();
      const broadcast = JSON.stringify({
        type: "message",
        username,
        message: parsed.message,
        timestamp: msg.createdAt,
      });
      wss.clients.forEach((client) => {
        if (client.readyState === ws.OPEN) {
          client.send(broadcast);
        }
      });
    }
  });
});

// to start server
server.listen(process.env.PORT || 5000, () => {
  console.log("Server started");
});
