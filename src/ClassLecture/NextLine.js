import React from "react";
import { DingdingOutlined } from "@ant-design/icons";
import log from "./login.png";
const NextLine = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "350px",
        // backgroundColor: "lightblue",
        backgroundImage: `url(${log})`,
        backgroundPosition: "center",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        style={{
          backgroundColor: " rgba(255, 255, 255, 0.98)",
          fontSize: "30px",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          height: "100%",
          margin: "auto",
          fontFamily: "Poppins",
          color: "#BD3119",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <DingdingOutlined />
          <div>JOIN A GRASSROOTS</div>
          <DingdingOutlined
            style={{
              display: "flex",
              alignItems: "center",
              transform: "scaleX(-1)",
            }}
          />
        </div>

        <div
          style={{
            fontSize: "40px",
            textAlign: "center",
            lineHeight: "1.2",
            width: "500px",
          }}
        >
          YOUTH MOVEMENT IGNITED BY SOCCER TO <strong>ELIMINATE</strong>
        </div>
        <div>THE ADOLESCENT HEALTH GAP</div>
        <p
          style={{
            fontSize: "15px",
            lineHeight: "1",
            width: "600px",
            textAlign: "center",
            color: "black",
            marginTop: "20px",
          }}
        >
          Grassroot Soccer is an adolescent health organization that leverages
          the power of soccer to educate, inspire, and mobilize at-risk youth in
          developing countries to overcome their greatest health challenges,
          live healthier, more productive lives, and be agents for change in
          their communities.
        </p>
      </div>
    </div>
  );
};

export default NextLine;

// #414550
