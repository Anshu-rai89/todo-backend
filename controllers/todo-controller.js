const Todo = require("../Modal /todo");
const User = require("../Modal /user");
module.exports.create = async (req, res) => {
  try {
    const data = req.body || {};
    data.userId = req.user._id;
    const todo = await Todo.create(data);
    const user = await User.findOne(req.user._id);
    console.log("find user", user);
    user.todos.push(todo._id);
    await user.save();
    return res.status(200).send({ msg: "Succfully created todo", todo, user });
  } catch (err) {
    console.log("error in crating todo");
    return res.status(500).send(err);
  }
};

module.exports.getTodo = async (req, res) => {
  try {
    const user = await User.findOne(req.user._id).populate("todos");
    return res
      .status(200)
      .send({ msg: "Fetched all todos", todos: user.todos });
  } catch (err) {
    console.log("error in gettings  todo");
    return res.status(500).send(err);
  }
};
