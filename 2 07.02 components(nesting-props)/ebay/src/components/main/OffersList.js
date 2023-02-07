import React from "react";

export default function OffersList({ products }) {
  return (
    <div
      style={{
        display: "flex",
        width: "70%",
        justifyContent: "space-evenly",
        marginTop: "30px",
      }}
    >
      {products.map((el, i) => (
        <div key={i}>
          <img src={el.image} alt={"pic" + i} />
          <h3> EUR {el.price} </h3>
        </div>
      ))}
    </div>
  );
}
