const router = require("express").Router();
const projectsController = require("../../controllers/projectsController");

// Matches with "/api/portfolio"
router.route("/")
    .get(projectsController.findAll)
    .post(projectsController.create);

module.exports = router;