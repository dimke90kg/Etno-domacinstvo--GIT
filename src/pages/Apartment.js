import React from "react";
import { ApHelp } from "../helpers/ApHelp";
import ApItem from "../Components/ApItem";
import "../styles/Apartment.css";

function Apartment() {
  return (
    <div className="menu">
      <h1 className="menuTitle">Apartmani</h1>
      <div className="menuList">
        {ApHelp.map((apItem, key) => {
          return (
            <ApItem
              key={key}
              image={apItem.image}
              name={apItem.name}
              price={apItem.price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Apartment;