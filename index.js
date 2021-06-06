const express = require("express");
const app = express();
const port = process.env.PORT || 7000;
const db = require("./configs/mongoose");
const passportjwt = require("./configs/passport-jwt");
const passport = require("passport");
const cors = require("cors");
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(cors());
app.use(express.json());

app.use("/", require("./routes"));
app.listen(port, (err) => {
  if (err) {
    console.error("Error in running server ");
  }
  console.log("Server is running at ", port);
});
