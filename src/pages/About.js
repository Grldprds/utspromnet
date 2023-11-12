import React from "react";
import foto from "../assets/pp.jpg";
import "../styles/About.css";

function About() {
  return (
    <div className="about">
      <div className="aboutBottom">
        <h1>Biography</h1>

        <img src={foto} alt="Deskripsi Gambar" />

        <ul>
            <li>Geral Septira Alfarizi Rades</li>
            <li>Education University of Indonesia </li>
            <li>Computer Science Education</li>
            <li>13 September 2003</li>
            <li>Bogor, West Java, Indonesia</li>
          </ul>   
        <p>
          <hr/>
          My name is Geral, I am a student in Education University of Indonesia with Computer Science Education program. My hobby is watch movie, playing games and listen some music
        </p>

      </div>
    </div>
  );
}

export default About;