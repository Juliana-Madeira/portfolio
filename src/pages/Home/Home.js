import React from "react";
import { Link } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa";

import './Home.css';

const Home = () => {
  return (
    <div className="home">
        <Link to='/about' className="all_link_button">
          Vem comigo :)
          <button type="button" className="home_about_button">
            <FaAngleDown size={25}/>
          </button>
        </Link>
    </div>
  );
};

export default Home;
