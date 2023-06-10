const router = require("express").Router();
const tarotManager = require("../manager/tarotManger");
const accessoryManager = require("../manager/accessoryManager");
const { majorArcanOptions } = require("../utils/optionsHelper");
//Create
router.get("/create", (req, res) => {
  res.render("card/create");
});

router.post("/create", (req, res) => {
  const { name, description, imageUrl, arcanNumber } = req.body;
  tarotManager.create({
    name,
    description,
    imageUrl,
    arcanNumber: Number(arcanNumber),
    owner: req.user.id,
  });
  res.redirect("/");
});
//Details
router.get("/:tarotId/details", async (req, res) => {
  const tarotDetails = await tarotManager
    .getOneWithAccessories(req.params.tarotId)
    .lean();
  res.render("card/details", tarotDetails);
});
//Accessories
router.get("/:tarotId/attach-accessories", async (req, res) => {
  const card = await tarotManager.getOne(req.params.tarotId).lean();
  const accessories = await accessoryManager
    .getRestOfAccessories(card.accessories)
    .lean();
  const hasAccessories = accessories.length > 0;

  res.render("accessories/attach", { card, accessories, hasAccessories });
});

router.post("/:tarotId/attach-accessories", async (req, res) => {
  const tarotId = req.params.tarotId;
  const { accessory: accessoryId } = req.body;

  await tarotManager.attachAccessory(tarotId, accessoryId);

  res.redirect(`/tarot/${tarotId}/details`);
});

//Edit
router.get("/:tarotId/edit", async (req, res) => {
  const card = await tarotManager.getOne(req.params.tarotId).lean();
  const options = majorArcanOptions(card.arcanNumber);
  res.render("card/edit", { card, options });
});

router.post("/:tarotId/edit", async (req, res) => {
  const { name, description, imageUrl, arcanNumber } = req.body;

  await tarotManager.update(req.params.tarotId, {
    name,
    description,
    imageUrl,
    arcanNumber,
  });

  res.redirect(`/tarot/${req.params.tarotId}/details`);
});

//Delete
router.get("/:tarotId/delete", async (req, res) => {
  const card = await tarotManager.getOne(req.params.tarotId).lean();
  const options = majorArcanOptions(card.arcanNumber);
  res.render("card/delete", { card, options });
});

router.post("/:tarotId/delete", async (req, res) => {
  await tarotManager.delete(req.params.tarotId);

  res.redirect("/");
});
module.exports = router;
