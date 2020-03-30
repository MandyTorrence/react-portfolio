import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ProjectList from "../components/ProjectList"
import { useStoreContext } from "../utils/GlobalState";
import { LOADING, UPDATE_FAVORITES } from "../utils/actions";

const Portfolio = () => {

  return (
    <div className="container mb-5 mt-5">
      <h1>My Portfolio</h1>
      <div className="mt-5">
        <ProjectList />
        <Link to="home">Back to home</Link>
      </div>
    </div>
  );
};

export default Portfolio;
