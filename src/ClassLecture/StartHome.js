import React from "react";
import { Button } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import img from "./epic.jpg";

const StartHome = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "550px",
        position: "relative",
        backgroundImage: `url(${img})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(40, 80, 184, 0.75)",
          color: "white",
          fontSize: "30px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div>
          <div>
            <div style={{ textAlign: "center", lineHeight: "1" }}>
              Andela builds remote engineering teams
            </div>
            <div>
              {" "}
              <center>
                {" "}
                <LeftOutlined /> that work <RightOutlined />
              </center>
            </div>
            <div
              style={{
                width: "400px",
                margin: "auto",
                fontSize: "15px",
              }}
            >
              {" "}
              Doing remote well is hard. We’ve helped hundreds of companies
              build and manage high performing teams.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartHome;
