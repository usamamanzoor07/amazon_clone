// IMPORTS FROM PACKAGES
const express = require("express");
const mongoose = require("mongoose");

// IMPORTS FROM OTHER FILES
const authRouter = require("./routes/auth");

// INITIALIZE
const PORT = 3000;
const app = express();
const DB =
  "mongodb+srv://Muhammad_Usama:FlutterAmazonClone@cluster0.3ouoi.mongodb.net/?retryWrites=true&w=majority";

//MIDDLEWARE
app.use(express.json());
app.use(authRouter);

//CONNECTIONS
mongoose.connect(DB).then(() => {
  console.log("Connection Successful");
});

app.listen(PORT,"0.0.0.0", () => {
  console.log(`connected at port ${PORT}`);
});
