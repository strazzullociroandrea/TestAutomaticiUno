/*Generatore di password: Realizza un'applicazione che generi password casuali con determinate specifiche (lunghezza, inclusione di lettere, numeri, caratteri speciali, ecc.). Utilizza Jest per testare che le password generate rispettino i requisiti specificati.*/
const express = require("express");
const http = require("http");
const app = express();
const path = require("path");
const fs = require("fs");
const bodyParser = require("body-parser");
const conf = JSON.parse(fs.readFileSync("conf.json"));
const generatePassword = require("./generaPassword.cjs");
const eseguiTest = require("./test.js");

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);

app.post("/generaPassword", (request, response) => {
  try {
       const { length } = request.body;
console.log(eseguiTest("Controllo lunghezza password",generatePassword(length),length));
    const password = generatePassword(length);
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
