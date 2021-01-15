import React from "react";
import { SliderTop, SliderWrapper, SliderHolder } from "./SliderStyle.js";
import { Button } from "antd";
import img from "./1.png";

const SliderComp = ({ img, direction, BGcolor, title, desc }) => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "500px",
          backgroundImage: `url(${img})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            height: "500px",
            backgroundColor: BGcolor,
            fontFamily: "Poppins",
            justifyContent: "center",
            alignItems: direction,
            padding: "0 50px",
          }}
        >
          <div
            style={{
              fontSize: "60px",
              textTransform: "uppercase",
              margin: "0px",
              lineHeight: "0.7",
            }}
          >
            {title}
          </div>
          <div
            style={{
              width: "400px",
            }}
          >
            {desc}
          </div>
          <Button
            style={{
              width: "200px",
              height: "40px",
              textTransform: "uppercase",
              background: BGcolor,
              color: "white",
            }}
          >
            Get Started
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SliderComp;
