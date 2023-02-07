import React from "react";
import "./ProductsList.css"

export default function ProductsList({ JohnDoe }) {
  return (
    <div id="container">
      {JohnDoe.map((el, i) => (
        <div key={i} className="singleCard">
          <img src={el.image} alt={el.name} />
          <h1> {el.name} </h1>
          <h3> {el.price} </h3>
        </div>
      ))}
    </div>
  );
}
