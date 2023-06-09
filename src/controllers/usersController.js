const router = require("express").Router();
const userManager = require("../manager/usersManager");

router.get("/register", (req, res) => {
  res.render("users/register");
});

router.post("/register", async (req, res) => {
  const userData = req.body;

  await userManager.register(userData);

  res.redirect("/users/login");
});

router.get("/login", (req, res) => {
  res.render("users/login");
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const token = await userManager.login(username, password);

  res.cookie("auth", token, { httpOnly: true });

  res.redirect("/");
});

router.get("/logout", (req, res) => {
  res.clearCookie("auth");
  res.redirect("/");
});
module.exports = router;
