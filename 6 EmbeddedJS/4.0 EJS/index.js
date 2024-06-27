import express from "express";
import bodyParser from "body-parser";
import { fileURLToPath } from "url";
import { dirname } from "path";

const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));
var day = null;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(processDate);

app.get("/", (req, res) => {
  res.render(__dirname + "/views/index.ejs", {
    dayResult: day,
    hello: "<h1>AHHH</h1>",
  });
});

app.listen(port, () => {
  console.log(`Server is running on PORT ${port}`);
});

function processDate(req, res, next) {
  const date = new Date();
  day = date.getDay();
  next();
}
