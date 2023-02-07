import React from "react";

export default function HeaderDown() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        width: "100%",
        height: "60px",
        borderBottom: "1px solid lightgrey",
      }}
    >
      <div style={{ fontSize: "40px", fontWeight: "500" }}>
        <span style={{ color: "#E85156" }}>e</span>
        <span style={{ color: "#0063D1" }}>b</span>
        <span style={{ color: "#F4AE01" }}>a</span>
        <span style={{ color: "#85B716" }}>y</span>
      </div>
      <div>Brows Categories</div>
      <form>
        <input style={{ width: "25vw", border: "2px solid black", height: "22px" }} type={"text"} />
        <button
          style={{
            width: "7vw",
            marginLeft: "3px",
            color: "#fff",
            backgroundColor: "#3665F3",
            border: "none",
            height: "30px"
          }}
        >
          {" "}
          Find{" "}
        </button>
      </form>
      <div>advanced</div>
    </div>
  );
}
