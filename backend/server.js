const express = require("express");
const app = express();
//const mongoDB = require("")

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE"); // Include the allowed methods
  next();
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(5000);
