const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = new Schema({
    title: { type: String, required: true },
    image: { type: String, required: true },
    githubUrl: { type: String, required: true },
    demoUrl: { type: String, required: true }
});

const Projects = mongoose.model("Projects", projectSchema);

module.exports = Projects;