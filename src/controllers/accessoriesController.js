const router = require("express").Router();

router.get("/accessories/create", (req, res) => {
  res.render("accessories/create");
});

module.exports = router;
