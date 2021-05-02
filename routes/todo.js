const express = require("express");
const router = express.Router();
const passport = require("passport");
const todoContorller = require("../controllers/todo-controller");
router.get(
  "/getTodo",
  passport.authenticate("jwt", { session: false }),
  todoContorller.getTodo
);
router.post(
  "/create",
  passport.authenticate("jwt", { session: false }),
  todoContorller.create
);

module.exports = router;
