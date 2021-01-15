import React from "react";
import img1 from "./pix1.jpg";
import img2 from "./pix2.jpg";
import img3 from "./ndidd.jpg";

const EpicBodyPix = () => {
  return (
    <div>
      <div
        style={{
          width: "500px",
          height: "300px",
        }}
      >
        <img
          alt="img"
          src={img1}
          style={{
            width: "90%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "10px",
          }}
        />
      </div>
      <div
        style={{
          width: "500px",
          height: "300px",
          marginRight: "-20px",
          marginTop: "-50px",
          zIndex: "1000",
        }}
      >
        <img
          alt="img"
          src={img2}
          style={{
            width: "70%",
            height: "70%",
            objectFit: "cover",
            borderRadius: "10px",
            position: "relative",
            float: "right",
            zIndex: "1000",
            boxShadow: "0 5px 7px -2px rgba(0, 0, 0, 0.55)",
          }}
        />
      </div>
      <div
        style={{
          width: "500px",
          height: "300px",
          marginTop: "-210px",
          marginLeft: "40px",
        }}
      >
        <img
          alt="img"
          src={img3}
          style={{
            width: "70%",
            height: "70%",
            objectFit: "cover",
            borderRadius: "10px",
            position: "relative",
            float: "left",
            marginTop: "-30px",
          }}
        />
      </div>
    </div>
  );
};

export default EpicBodyPix;
