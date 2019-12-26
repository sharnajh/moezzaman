import React from "react";
import MoeSVG from "./MoeSVG";

const Bio = () => {
    return (
      <div className="section">
        <div className="moetivation">
        <h1 style={{ fontSize: "150px" }}>#</h1>
        <div id="svgcontainer">
          <MoeSVG />
        </div>
        <h1 style={{ fontSize: "150px" }}>TIVATE</h1>
        </div>
        <p>Mohammed graduated from Baruch College, Zicklin School of Business with a BBA in Finance in 2018.<br />
        (The rest of the bio will go here).</p>
        
      </div>
    );
}

export default Bio;
