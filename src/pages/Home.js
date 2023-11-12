import React from 'react'
import { Link} from "react-router-dom";
import background from "../assets/geral.png";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${background})`}}>
      <div className="headerContainer" >     
        <Link to="About">
        <button>About Me</button>
        </Link>
      </div>
    </div>
  );
}

export default Home