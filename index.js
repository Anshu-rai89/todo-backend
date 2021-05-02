const express = require("express");
const app = express();
const port = process.env.PORT || 7000;
const db = require("./configs/mongoose");
const passportjwt = require("./configs/passport-jwt");
const passport = require("passport");
app.use(express.json());
app.use("/", require("./routes"));
app.listen(port, (err) => {
  if (err) {
    console.error("Error in running server ");
  }
  console.log("Server is running at ", port);
});
