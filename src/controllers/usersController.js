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
module.exports = router;
