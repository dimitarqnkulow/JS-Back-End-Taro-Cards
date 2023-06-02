const router = require("express").Router();
const homeController = require("./controllers/homeController");
const tarotController = require("./controllers/tarotController");
const accessoriesController = require("./controllers/accessoriesController");

router.use(homeController);
router.use("/tarot", tarotController);
router.use(accessoriesController);

module.exports = router;
