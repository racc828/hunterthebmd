import React from "react";
import HunterTongueOut from "../img/hunter-tongue-out.jpg";

const Home = () => {
  return (
    <div className="home">
      <div className="row">
        <div className="col-6"> Hunter</div>
        <div className="col-6">
          <img src={HunterTongueOut} />
        </div>
      </div>
    </div>
  );
};

export default Home;
