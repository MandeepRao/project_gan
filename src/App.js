import React from "react";

import Navbar from "./navbar";

import "./styles.css";

export default function App() {
  return (
    <div
      style={{
        padding: "0px",
        margin: "0px 0px 0px",
        position: "absolute",
        color: "black",
        height: "100%",
        width: "100%",
        backgroundImage:
          "url(https://www.fleetscience.org/sites/default/files/images/neural-mlblog.gif)"
      }}
      className="App"
    >
      <Navbar />
      <div>
        <button style={{ width: "120px", margin: "500px 80px 0px" }}>
          Upload Image
        </button>
        <button>Download Image</button>
      </div>
      <div style={{ margin: "30px 10px 10px 1270px" }}></div>
    </div>
  );
}
