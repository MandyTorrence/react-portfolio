const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Portfolios and inserts the items below

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/reactreadinglist"
);

const portfolioSeed = [
    {
        title: "Weather Dashboard",
        image: "../../Images/Torrence-PortfolioImage-Weather.jpg",
        githubUrl: "https://github.com/MandyTorrence/weatherForecast.github.io",
        demoUrl: "https://mandytorrence.github.io/weatherForecast.github.io"
    },
    {
        title: "Harry Potter Quiz",
        image: "../../Images/Torrence-PortfolioImage-HarryPotterQuiz.jpg",
        githubUrl: "https://github.com/MandyTorrence/quiz-game",
        demoUrl: "https://mandytorrence.github.io/quiz-game/"
    },
    {
        title: "Password Generator",
        image: "../../Images/Torrence-PortfolioImage-Password.jpg",
        githubUrl: "https://github.com/MandyTorrence/mandy-torrence.javascript.github.io",
        demoUrl: "https://mandytorrence.github.io/mandy-torrence.javascript.github.io/"
    },
    {
        title: "Dog Friendly World",
        image: "../../Images/Torrence-PortfolioImage-DogFriendly.jpg",
        githubUrl: "https://github.com/apereira91/dogFriendly",
        demoUrl: "https://apereira91.github.io/dogFriendly/"
    },
    {
        title: "Note Taker",
        image: "../../Images/Torrence-PortfolioImage-Notes.jpg",
        githubUrl: "https://github.com/MandyTorrence/notetaker",
        demoUrl: "https://torrencenotetaker.herokuapp.com/"
    },
    {
        title: "Fairy Tale Tours",
        image: "../../Images/Torrence-PortfolioImage-FairyTaleTours.jpg",
        githubUrl: "https://github.com/tour-guide/tour-guide-web",
        demoUrl: "https://fairytale-audio-tours.herokuapp.com/stories"
    }
];

db.Portfolios
    .remove({})
    .then(() => db.Portfolio.collection.insertMany(portfolioSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });