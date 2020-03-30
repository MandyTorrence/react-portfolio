import React, { useEffect } from "react";
import ProjectList from "../components/ProjectList"

const Portfolio = () => {

  return (
    <div className="container mb-5 mt-5">
      <h1>My Portfolio</h1>
      <div className="mt-5">
        <ProjectList />
      </div>
    </div>
  );
};

export default Portfolio;
