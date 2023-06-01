const router = require("express").Router();
const tarotManager = require("../manager/tarotManger");

router.get("/", async (req, res) => {
  const { search, from, to } = req.query;

  const tarotCards = await tarotManager.getAll(search, from, to);
  res.render("index", { tarotCards, search, from, to });
});
router.get("/about", (req, res) => {
  res.render("about");
});

module.exports = router;
