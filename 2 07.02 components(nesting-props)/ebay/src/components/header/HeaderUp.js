import React from "react";
import { BiBell } from "react-icons/bi";
import {BsCart3} from "react-icons/bs";

export default function HeaderUp() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        width: "100%",
        fontSize: "10px",
        alignItems: "center",
        borderBottom: "1px solid lightgrey",
        height: "23px"
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "500px",
          alignItems: "center",
        }}
      >
        <p>
          Hello! <a href="#login"> Login </a> or
          <a href="#register"> register again</a>
        </p>
        <div>
          <strong>
            <span>ebay</span>
          </strong>
          <span style={{ color: "green" }}>plus</span>
        </div>

        <div className="nav-btn">deal</div>
        <div className="nav-btn">CO2 account</div>
        <div className="nav-btn">Help</div>
        <div
          style={{
            width: "100px",
            backgroundColor: "#FFD1DD",
            padding: "0 5px",
            color: "#710526",
            height: "100%",
            fontWeight: "900",
          }}
        >
          {" "}
          Wir fieren die <br /> Liebe mit -20%
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "300px",
          alignItems: "center"
        }}
      >
        <div className="nav-btn">Sell</div>
        <div className="nav-btn">Observation list</div>
        <div className="nav-btn">My ebay</div>
        <BiBell size={"18"}/>
        <BsCart3 size={"18"}/>
      </div>
    </div>
  );
}
