import React from "react";
import foto from "../assets/pp.png";
import "../styles/About.css";

function About() {
  return (
    <div className="about">
       <div className="aboutBottom">
        <h1>My Profile</h1>
        <img src={foto} alt="profil" />
        <ul>
            <li>Geral Septira Alfarizi Rades</li>
            <li>Education University of Indonesia </li>
            <li>Computer Science Education</li>
            <li>13 September 2003</li>
            <li>Bogor, West Java, Indonesia</li>
          </ul>   
      </div>
    </div>
  );
}

export default About;