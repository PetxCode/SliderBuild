import React from "react";
import me from "./me.png";

const EpicBodyComp = ({ descColor, color, header, number, sub, desc }) => {
  return (
    <div style={{}}>
      <div style={{ width: "300px" }}>
        <hr />
      </div>
      <div
        style={{
          width: "200px",
          fontSize: "20px",
          lineHeight: "1",
          fontFamily: "Poppins",
          fontWeight: "bold",
        }}
      >
        {header}
      </div>
      <div
        style={{
          width: "200px",
          fontSize: "50px",
          lineHeight: "1",
          fontFamily: "Poppins",
          fontWeight: "bold",
          marginTop: "20px",
          color: color,
        }}
      >
        {number}
      </div>
      <div
        style={{
          width: "200px",
          fontSize: "15px",
          lineHeight: "1",
          fontFamily: "Poppins",
          color: color,
          // fontWeight: "bold",
        }}
      >
        {sub}
      </div>
      <div
        style={{
          width: "200px",
          fontSize: "15px",
          lineHeight: "1",
          fontFamily: "Poppins",
          // fontWeight: "bold",
          marginTop: "30px",
          color: "gray",
        }}
      >
        {desc}
      </div>
    </div>
  );
};

export default EpicBodyComp;
