const router = require("express").Router();
const tarotManager = require("../manager/tarotManger");
const accessoryManager = require("../manager/accessoryManager");

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
  const tarotDetails = await tarotManager.getOne(req.params.tarotId).lean();
  res.render("details", tarotDetails);
});

router.get("/:tarotId/attach-accessories", async (req, res) => {
  const card = await tarotManager.getOne(req.params.tarotId).lean();
  const accessories = await accessoryManager.getAll().lean();
  const hasAccessories = accessories.length > 0;

  res.render("accessories/attach", { card, accessories, hasAccessories });
});
module.exports = router;
