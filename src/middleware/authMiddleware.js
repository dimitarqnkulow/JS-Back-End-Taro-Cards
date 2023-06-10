const jwt = require("../lib/jwt");
const { SECRET } = require("../config/config");

exports.auth = async (req, res, next) => {
  const token = req.cookies["auth"];
  console.log(token);
  if (token) {
    try {
      const decodedToken = await jwt.verify(token, SECRET);
      req.user = decodedToken;
      next();
    } catch (error) {
      res.clearCookie("auth");
      return res.redirect("/users/login");
    }
  } else {
    next();
  }
};
