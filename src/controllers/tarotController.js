const router = require("express").Router();
const tarotManager = require("../manager/tarotManger");
router.get("/create", (req, res) => {
  res.render("create");
});

router.post("/create", (req, res) => {
  const { name, description, imageUrl, arcanNumber } = req.body;

  tarotManager.create({
    name,
    description,
    imageUrl,
    arcanNumber: Number(arcanNumber),
  });

  res.redirect("/");
});

router.get("/:tarotId/details", async (req, res) => {
  const tarotDetails = await tarotManager.getOne(req.params.tarotId);
  res.render("details", tarotDetails);
});
module.exports = router;
