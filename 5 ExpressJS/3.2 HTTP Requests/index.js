import express from "express";

const App = express();
const PORT = 3000;

App.get("/", function (request, response) {
  response.send("<h1>Hello World</h1> <p> My name is Anthony! </p>");
});

App.get("/contact", (req, res) => {
  res.send("<h1 style='background-color: blue'> Contact Me! </h1>");
});

App.get("/about", (req, res) => {
  res.send("<h1> My name is Anthony </h1> ");
});

App.listen(PORT, () => {
  console.log(`Server ${PORT} is running!`);
});
