const router = require("express").Router();
const homeController = require("./controllers/homeController");
const tarotController = require("./controllers/tarotController");

router.use(homeController);
router.use("/tarot", tarotController);

module.exports = router;
