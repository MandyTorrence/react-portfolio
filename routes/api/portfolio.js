const router = require("express").Router();
const portfolioController = require("../../controllers/portfolioController");

// Matches with "/api/portfolio"
router.route("/")
    .get(portfolioController.findAll)
    .post(portfolioController.create);

module.exports = router;