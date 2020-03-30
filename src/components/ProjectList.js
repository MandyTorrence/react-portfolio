import React from "react";

const projects = [
  {
    id: 1,
    title: "Weather Dashboard",
    image: "../../Images/Torrence-PortfolioImage-Weather.jpg",
    githubUrl: "https://github.com/MandyTorrence/weatherForecast.github.io",
    demoUrl: "https://mandytorrence.github.io/weatherForecast.github.io"
  },
  {
    id: 2,
    title: "Harry Potter Quiz",
    image: "../../Images/Torrence-PortfolioImage-HarryPotterQuiz.jpg",
    githubUrl: "https://github.com/MandyTorrence/quiz-game",
    demoUrl: "https://mandytorrence.github.io/quiz-game/"
  },
  {
    id: 3,
    title: "Password Generator",
    image: "../../Images/Torrence-PortfolioImage-Password.jpg",
    githubUrl: "https://github.com/MandyTorrence/mandy-torrence.javascript.github.io",
    demoUrl: "https://mandytorrence.github.io/mandy-torrence.javascript.github.io/"
  },
  {
    id: 4,
    title: "Dog Friendly World",
    image: "../../Images/Torrence-PortfolioImage-DogFriendly.jpg",
    githubUrl: "https://github.com/apereira91/dogFriendly",
    demoUrl: "https://apereira91.github.io/dogFriendly/"
  },
  {
    id: 5,
    title: "Note Taker",
    image: "../../Images/Torrence-PortfolioImage-Notes.jpg",
    githubUrl: "https://github.com/MandyTorrence/notetaker",
    demoUrl: "https://torrencenotetaker.herokuapp.com/"
  },
  {
    id: 6,
    title: "Fairy Tale Tours",
    image: "../../Images/Torrence-PortfolioImage-FairyTaleTours.jpg",
    githubUrl: "https://github.com/tour-guide/tour-guide-web",
    demoUrl: "https://fairytale-audio-tours.herokuapp.com/stories"
  }
];


const ProjectList = () => {
  return (
    <ul className="flex">
      {projects.map(project => {
        return <li key={project.id} className="project-card">
          <img src={project.image} alt={project.title} />
          <h3>{project.title}</h3>
          <div className="project-buttons">
            <a href={project.githubUrl} target="_blank"><button>See the Code</button></a>
            <a href={project.demoUrl} target="_blank"><button>See the Demo</button></a>
          </div>
        </li>;
      })}
    </ul>
  );
};


export default ProjectList;