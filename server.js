import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";

const app = express();

const result = dotenv.config();
if (result.error) throw result.error;

const PORT = result.parsed.PORT;

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res, next) => {
  res.send({ hello: "world" });
});

app.get("/time", (req, res, next) => {
  res.send({ time: new Date().getSeconds() });
});

app.listen(PORT, () => {
  console.log(`server is listening in on port: ${PORT}`);
});
