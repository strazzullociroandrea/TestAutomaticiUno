import {generaPassword} from "./generaPassword.js";
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const express = require("express");
const http = require("http");
const app = express();
const path = require("path");
const fs = require("fs");
const bodyParser = require("body-parser");
const conf = JSON.parse(fs.readFileSync("conf.json"));
//const generatePassword = require("./generaPassword.js");

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);

app.post("/generaPassword", (request, response) => {
  try {
    const { length } = request.body;
    const password = generaPassword(length);
    response.json({result: password });
  } catch (error) {
    response.json({ result: "Password non generata" });
  }
});

//reindirizzamento alla cartella public
app.use("/", express.static(path.join(__dirname, "public")));
const server = http.createServer(app);
server.listen(conf.port, () => {
  console.log("---> server running");
});
