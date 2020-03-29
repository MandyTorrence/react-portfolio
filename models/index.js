const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const portfolioSchema = new Schema({
    title: { type: String, required: true },
    image: { type: String, required: true },
    githubUrl: { type: String, required: true },
    demoUrl: { type: String, required: true }
});

const Portfolio = mongoose.model("Portfolio", portfolioSchema);

module.exports = Portfolio;