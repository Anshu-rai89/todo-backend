const express = require("express");
const router = express.Router();
const todoContorller = require("../controllers/todo-controller");
router.use("/todo", require("./todo"));
router.use("/user", require("./user"));

module.exports = router;
