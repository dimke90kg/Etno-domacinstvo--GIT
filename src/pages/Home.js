import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/banner2.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})`}}>
      <div className="headerContainer" >
        <h1>Etno domaćinstvo Dimitrijević</h1>
        <p>Hrana za svačiji ukus </p>
        <Link to="/menu">
        <button type="">MENU</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
