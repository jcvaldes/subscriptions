import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { readdirSync } from "fs";
const morgan = require("morgan");
require("dotenv").config();

const app = express();
// DB
mongoose
  .connect(process.env.DATABASE, {})
  .then(() => console.log("DB connected"))
  .catch((err) => console.error("DB Error => ", err));

// MIDDLEWARES
app.use(express.json({ limit: "5mb" }));
app.use(
  cors({
    origin: [process.env.CLIENT_URL],
  })
);
app.use(morgan("dev"));

// AUTOLOAD ROUTES
// app.post("/api/register", (req, res) => {
//   res.send("register");
// });

readdirSync("./routes").map((r) => app.use("/api", require(`./routes/${r}`)));

// LISTEN
const port = process.env.PORT || 8000;
app.listen(port, () =>
  console.log(`Server listening on port ${process.env.PORT}`)
);
