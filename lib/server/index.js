console.log("Hello World!");

const express = require("express");
//import in dart

const PORT = 3000;

const app = express();
//initialization of express

//Creating an API
//GET, PUT, POST, DELETE, UPDATE -> CRUD

// http://<yourIpAddress>/hello-world
app.get("/", (req, res) => {
  res.json({name:"Muhammad Usama"});
});

app.get("/hello-world", (req, res) => {
    res.send("Hello World!\n Usama is here.");
  });

app.listen(PORT, () => {
  console.log(`connected at port ${PORT}`);
});
