const router = require("express").Router();
const portfolioRoutes = require("./projects.js");

//Portfolio routes
router.use("/portfolio", portfolioRoutes);

module.exports = router;