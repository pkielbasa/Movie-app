import React from "react";

import Input from "../components/Input";


import "../styles/Home.css";
import image from "../images/image.jpg"
import image2 from "../images/image2.jpg"
import image3 from "../images/image3.jpg"
import image4 from "../images/image4.jpg"
import image5 from "../images/image5.jpg"
import image6 from "../images/image6.jpg"
import {Link} from "react-router-dom";
const Home = () => {

  return (
    <div className="home-container">
      <Input />


        <div className="movies">
            <Link to ="/details">
                <img src={image}/>
            <img src={image2}/>
            <img src={image4}/>
            <img src={image5}/>
            <img src={image6}/>
            <img src={image3}/>
        </Link>
        </div>

    </div>
  );
};

export default Home;
