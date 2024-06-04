import "./HeroImgStyles.css";
import heroImg from "../assets/heroImg.jpg";
import React from 'react'
//import { Link } from "react-router-dom";
const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
          <img className="into-img" src={heroImg} alt="heroimage"/>
        </div>
          <div className="content">
              <h1>
                Front-End Developer
              </h1>
              
          </div>

    </div>
  )
};

export default HeroImg;