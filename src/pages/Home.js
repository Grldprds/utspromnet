import React from 'react'
import { Link} from "react-router-dom";
import background from "../assets/bg.png";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${background})`}}>
      <div className="headerContainer" >    
      <h1>
          Geral Pradesa
      </h1> 
      <h2>
          Student/Programmer
      </h2>
        <Link to="About">
        <button>About Me</button>
        </Link>
      </div>
    </div>
  );
}

export default Home