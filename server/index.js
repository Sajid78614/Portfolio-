import "dotenv/config";
import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import path from "node:path";
import { fileURLToPath } from "node:url";
import Message from "./models/Message.js";

const app = express();
const port = Number(process.env.PORT) || 5000;
const clientBuildPath = fileURLToPath(new URL("../client/dist", import.meta.url));

app.use(cors({ origin: process.env.CLIENT_ORIGIN || "http://localhost:5173" }));
app.use(express.json({ limit: "10kb" }));

app.get("/api/health", (_request, response) => {
  response.json({ status: "ok", database: mongoose.connection.readyState === 1 ? "connected" : "disconnected" });
});

app.post("/api/contact", async (request, response, next) => {
  const { name, email, message } = request.body ?? {};

  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof message !== "string" ||
    !name.trim() ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()) ||
    !message.trim() ||
    name.trim().length > 80 ||
    email.trim().length > 254 ||
    message.trim().length > 2000
  ) {
    return response.status(400).json({ message: "Please provide a valid name, email, and message." });
  }

  if (mongoose.connection.readyState !== 1) {
    return response.status(503).json({ message: "The contact service is unavailable. Please email me directly." });
  }

  try {
    await Message.create({ name, email, message });
    return response.status(201).json({ message: "Thanks for reaching out. Your message has been received." });
  } catch (error) {
    return next(error);
  }
});

app.use(express.static(clientBuildPath));
app.get("*", (_request, response, next) => {
  response.sendFile(path.join(clientBuildPath, "index.html"), (error) => {
    if (error) next(error);
  });
});

app.use((error, _request, response, _next) => {
  console.error("API error:", error);
  response.status(500).json({ message: "Something went wrong. Please try again later." });
});

async function start() {
  if (!process.env.MONGODB_URI) {
    throw new Error("MONGODB_URI is required. Copy server/.env.example to server/.env and configure it.");
  }

  await mongoose.connect(process.env.MONGODB_URI);
  app.listen(port, () => {
    console.log(`Portfolio API listening on http://localhost:${port}`);
  });
}

start().catch((error) => {
  console.error("Could not start the portfolio API:", error.message);
  process.exitCode = 1;
});
