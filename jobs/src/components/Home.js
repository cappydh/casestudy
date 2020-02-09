import React from "react";
import history from "../history";

import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-md-auto welcome-text">Welcome to Job Search</div>
        </div>
        <div className="row justify-content-md-center">
          <div className="col-md-auto">
            <button
              type="button"
              className="btn btn-primary jobs-button"
              onClick={() => history.push("/joblist")}
            >
              Search for Jobs
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
