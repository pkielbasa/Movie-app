import React from "react";

import Input from "../components/Input";

import "../styles/Home.css";
import image from "../images/image.jpg"
import image2 from "../images/image2.jpg"
import image3 from "../images/image3.jpg"
import image4 from "../images/image4.jpg"
import image5 from "../images/image5.jpg"
import image6 from "../images/image6.jpg"
const Home = () => {

  return (
    <div className="home-container">
      <Input />


        <div className="movies">
            <img src={image}></img>
            <img src={image2}></img>
            <img src={image4}></img>
            <img src={image5}></img>
            <img src={image6}></img>
            <img src={image3}></img>
        </div>

    </div>
  );
};

export default Home;
