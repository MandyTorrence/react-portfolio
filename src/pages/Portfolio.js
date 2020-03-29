import React, { useEffect } from "react";
import { ListItem, List } from "../components/List";
import { Link } from "react-router-dom";
import { useStoreContext } from "../utils/GlobalState";
import { LOADING, UPDATE_FAVORITES } from "../utils/actions";

const Portfolio = () => {

  return (
    <div className="container mb-5 mt-5">
      <h1>My Portfolio</h1>



      <h3>You haven't added any projects yet!</h3>

      <div className="mt-5">
        <Link to="home">Back to home</Link>
      </div>
    </div>
  );
};

export default Portfolio;
