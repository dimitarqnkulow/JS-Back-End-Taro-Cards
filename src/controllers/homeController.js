const router = require("express").Router();
const tarotManager = require("../manager/tarotManger");

router.get("/", (req, res) => {
  const tarotCards = tarotManager.getAll();
  console.log(tarotCards);
  res.render("index", { tarotCards });
});
router.get("/about", (req, res) => {
  res.render("about");
});

module.exports = router;
