import React, { useState } from "react";
import "../styles/Navbar.css";
import { Link } from "react-router-dom"
import ReorderIcon from "@mui/icons-material/Reorder";
import Logo from "../assets/logoDi.png";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <img src={Logo} />
        <div className="hiddenLinks">
          <Link to="/"> Početna </Link>
          <Link to="/menu"> Menu </Link>
          <Link to="/apartmani"> Apartmani </Link>
          <Link to="/about"> O nama </Link>
          <Link to="/contact"> Kontakt </Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/"> Početna </Link>
        <Link to="/menu"> Menu </Link>
        <Link to="/apartmani"> Apartmani </Link>
        <Link to="/about"> O nama </Link>
        <Link to="/contact"> Kontakt </Link>
        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
}

export default Navbar;