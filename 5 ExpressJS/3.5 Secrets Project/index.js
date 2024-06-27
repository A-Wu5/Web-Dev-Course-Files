//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import express from "express";
import bodyParser from "body-parser";
import { fileURLToPath } from "url";
import { dirname } from "path";

const App = express();
const __dirname = dirname(fileURLToPath(import.meta.url));
const PORT = 3000;

App.use(bodyParser.urlencoded({ extended: true }));

App.post("/check", (req, res) => {
  var password = req.body.password;
  if (password === "ILoveProgramming") {
    res.sendFile(__dirname + "/public/secret.html");
  } else {
    res.redirect("/");
  }
});

App.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

App.listen(PORT, () => {
  console.log(`Server is running on Port ${PORT}`);
});
