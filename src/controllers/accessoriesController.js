const router = require("express").Router();
const accessoryManager = require("../manager/accessoryManager");

router.get("/accessories/create", (req, res) => {
  res.render("accessories/create");
});

router.post("/accessories/create", async (req, res) => {
  const { name, description, imageUrl } = req.body;

  const accessoriesData = { name, description, imageUrl };

  await accessoryManager.create(accessoriesData);

  res.redirect("/");
});
module.exports = router;
