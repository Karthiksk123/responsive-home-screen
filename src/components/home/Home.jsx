import React from "react";
import "./Home.scss";
import StarOutlineIcon from "@mui/icons-material/StarOutline";

const Home = () => {
  return (
    <div className="home-comp">
      <div className="home-wrap">
        <div className="left-cont">
          <div className="left-texts">
            <p>#Top</p>
            <h1>A Responsible as tech Leading , Global Company</h1>
            <h5>Creating superior products & services</h5>
          </div>
          <div className="left-adds">
            <div className="adds-icon">
              <StarOutlineIcon />
            </div>
            <div className="adds-right">
              <p>Trust pilot</p>
              <p>
                Rated best <span>12.6k</span> Reviews
              </p>
            </div>
          </div>
          <div className="left-top-btns">
            <button>Signup to get 50% OFF</button>
            <button>Explore the new products</button>
          </div>
        </div>
        <div className="right-cont">
          <div className="left-area">
            <div className="left-area-text">
              <h3>Play</h3>
            </div>
          </div>
          <div className="right-area">
            <div className="top-div">
              <h3>72%</h3>
            </div>
            <div className="bottom-div">
              <h3>28%</h3>
            </div>
          </div>
        </div>
        <div className="right-top-btns">
          <button>Signup to get 50% OFF</button>
          <button>Explore the new products</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
