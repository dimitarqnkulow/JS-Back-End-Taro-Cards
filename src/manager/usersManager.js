const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("../lib/jwt");
const { SECRET } = require("../config/config");
exports.register = (userData) => {
  User.create(userData);
};

exports.login = async (username, password) => {
  //find user
  const user = await User.findOne({ username });

  if (!user) {
    throw new Error("Username or password is not correct!");
  }
  //Validate password
  const isValid = await bcrypt.compare(password, user.password);

  if (!isValid) {
    throw new Error("Username or password is not correct!");
  }

  //return user
  const payload = { id: user._id, username: user.username };

  const token = jwt.sign(payload, SECRET, { expiresIn: "3d" });

  return token;
};
