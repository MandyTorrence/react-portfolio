const router = require("express").Router();
const portfolioRoutes = require("./portfolio.js");

//Portfolio routes
router.use("/portfolio", portfolioRoutes);

module.exports = router;