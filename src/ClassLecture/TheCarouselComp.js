import React from "react";
// import img from "./uba.jpg";
import { Button } from "antd";

const TheCarouselComp = ({
  img,
  bgColor,
  title,
  desc,
  position,
  btnColor,
  textArrangement,
}) => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        backgroundImage: `url(${img})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: bgColor,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: position,
          fontFamily: "Poppins",
          // PaddingLeft: "60px",
          padding: "0 50px",
        }}
      >
        <div
          style={{
            fontWeight: "bold",
            fontSize: "60px",
          }}
        >
          {" "}
          {title}
        </div>
        <div
          style={{
            width: "500px",
            lineHeight: "1.5",
            marginTop: "20px",
            marginBottom: "20px",
            textAlign: textArrangement,
            // textAlign: "right",
          }}
        >
          {" "}
          {desc}
        </div>

        <Button
          style={{
            width: "200px",
            height: "50px",
            // display: "flex",
            // justifyContent: "center",
            backgroundColor: btnColor,
            color: "white",
            // ghost: true,
          }}
        >
          Get started
        </Button>
      </div>
    </div>
  );
};

export default TheCarouselComp;
