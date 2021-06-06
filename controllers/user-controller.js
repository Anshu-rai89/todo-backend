const User = require("../Modal /user");
const jwt = require("jsonwebtoken");

module.exports.register = async (req, res) => {
  try {
    const { email, password, name } = req.body || {};
    console.log("in regiter ", email, password);
    // check if user already exist in my database
    const user = await User.findOne({ email: email });

    if (user) {
      throw new Error("User is already present");
    }

    // create user in databsee

    let newUser = await User.create(req.body);
    return res
      .status(201)
      .send({ msg: "User register sucess ", data: newUser });
  } catch (err) {
    console.log("error in creating  User", err);
    return res.status(500).send(err);
  }
};

module.exports.createSession = async (req, res) => {
  try {
    const { email, password, name } = req.body || {};

    // check if user already exist in my database
    const user = await User.findOne({ email: email });

    if (!user) {
      return res.status(402).send({ msg: "User is not Registred" });
    }

    // create user in databsee

    if (user.password != password) {
      return res.status(402).send({ msg: "User is Incorrect" });
    }

    const token = jwt.sign(
      {
        email: user.email,
        name: user.name,
      },
      "ah.sl.dsc"
    );

    return res
      .status(201)
      .send({ msg: "User Login sucess ", data: { token: token } });
  } catch (err) {
    console.log("error in creating  User");
    return res.status(500).send(err);
  }
};
