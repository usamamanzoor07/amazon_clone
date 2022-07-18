// IMPORTS FROM PACKAGES
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");



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
const corsOptions ={
  origin:'http://localhost:3000',
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200
}
app.use(cors(corsOptions));
// app.use(cors());

// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Methods", "GET,PUT,PATCH,POST,DELETE");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

//CONNECTIONS
mongoose.connect(DB).then(() => {
  console.log("Connection Successful");
});

app.listen(PORT,"0.0.0.0", () => {
  console.log(`connected at port ${PORT}`);
});
