const router = require("express").Router();
const homeController = require("./controllers/homeController");
const tarotController = require("./controllers/tarotController");
const accessoriesController = require("./controllers/accessoriesController");
const usersController = require("./controllers/usersController");

router.use(homeController);
router.use("/tarot", tarotController);
router.use(accessoriesController);
router.use("/users", usersController);

module.exports = router;
