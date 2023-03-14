import React from "react";

function ApItem({ image, name, price }) {
  return (
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1> {name} </h1>
      <p>  {price} Rsd </p>
    </div>
  );
}

export default ApItem;