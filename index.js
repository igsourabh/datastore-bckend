import dotenv from "dotenv";
import express from "express";
import session from "express-session";
import helmet from "helmet";
import cors from "cors";

import morgan from "morgan";
import fileUpload from "express-fileupload";
import bodyParser from "body-parser";
dotenv.config();
// Routers
import { connectDB } from "./config/connectDB.js";
import dataRouter from "./routers/data.router.js";
// import rulesRouter from "./routers/rules.router.js";

const app = express();
app.use(bodyParser.json({ limit: "10mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "10mb" }));

app.use(
  cors({
    origin: "*",
  })
);
app.use(fileUpload());
app.use(express.json());
app.use(morgan("dev"));
app.use(helmet());
app.use(
  session({
    secret: "ragnar",
    resave: true,
    saveUninitialized: true,
  })
);

app.use("/health", (req, res) => {
  res.send(`API is working - v1.0.0 ${process.env.NODE_ENV}`);
});

app.use("/", dataRouter);

const PORT = process.env.PORT || 5005;
const server = app.listen(PORT, () => {
  connectDB();

  console.log(
    `App listening on http://localhost:${PORT} in ${process?.env?.NODE_ENV} ENVIRONMENT!`
  );
});

process.on("SIGINT", () => {
  console.log("Closing the server...");

  server.close(() => {
    console.log("Server closed.");
    process.exit(0);
  });
});
