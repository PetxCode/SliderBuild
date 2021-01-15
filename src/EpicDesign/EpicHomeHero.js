import React from "react";
import img from "./epic.jpg";
import { Button } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import logo1 from "./logo/1.png";
import logo2 from "./logo/2.png";
import logo3 from "./logo/3.png";
import logo4 from "./logo/4.png";
import logo4i from "./logo/4i.png";
import logo5 from "./logo/5.png";
import logo6 from "./logo/6.png";
import logo7 from "./logo/7.png";
import logo8 from "./logo/8.png";

const EpicHomeHero = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "750px",
        position: "relative",
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
          position: "absolute",
          backgroundColor: "rgb(41, 83, 190, 0.8)",
          display: "flex",
          flexDirection: "column",
          // justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            marginTop: "100px",
            color: "white",
            fontFamily: "Poppins",
            fontSize: "30px",
            textAlign: "center",
            padding: "0 10px",
          }}
        >
          <div style={{ textTransform: "uppercase" }}>
            Andela builds remote engineering teams
          </div>

          <div
            style={{
              textTransform: "uppercase",
              color: "#F9AF2F",
              marginTop: "0px",
            }}
          >
            {" "}
            <LeftOutlined /> THAT WORK <RightOutlined />
          </div>
          <center
            style={{
              fontSize: "18px",
              padding: "0px 10px",
              justifyContent: "center",
              display: "flex",
              // backgroundColor: "lightblue",
              width: "500px",
              margin: "auto",
              marginTop: "20px",
            }}
          >
            Doing remote well is hard. We’ve helped hundreds of companies build
            and manage high performing teams.
          </center>

          <Button
            style={{
              width: "150px",
              height: "50px",
              backgroundColor: "#F9AF2F",
              color: "black",
              fontSize: "20px",
              outlineWidth: "0",
              border: "none",
              marginTop: "30px",
              // color:"black"
            }}
          >
            Get Start
          </Button>
          <div
            style={{
              fontSize: "15px",
              marginTop: "50px",
            }}
          >
            TRUSTED BY LEADING TECH COMPANIES
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            <div
              style={{
                height: "40px",
                width: "100px",
                // backgroundColor: "red",
                margin: "2px 10px",
              }}
            >
              <img
                alt="logo"
                src={logo1}
                width="100%"
                height="100%"
                style={{ objectFit: "contain" }}
              />
            </div>
            <div
              style={{
                height: "40px",
                width: "100px",
                // backgroundColor: "red",
                margin: "2px 10px",
                objectFit: "contain",
              }}
            >
              <img
                alt="logo"
                src={logo2}
                width="100%"
                height="100%"
                style={{ objectFit: "contain" }}
              />
            </div>
            <div
              style={{
                height: "40px",
                width: "100px",
                // backgroundColor: "red",
                margin: "2px 10px",
              }}
            >
              <img
                alt="logo"
                src={logo3}
                width="100%"
                height="100%"
                style={{ objectFit: "contain" }}
              />
            </div>
            <div
              style={{
                height: "40px",
                width: "100px",
                // backgroundColor: "red",
                margin: "2px 10px",
              }}
            >
              <img
                alt="logo"
                src={logo4}
                width="100%"
                height="100%"
                style={{ objectFit: "contain" }}
              />
            </div>
            <div
              style={{
                height: "40px",
                width: "100px",
                // backgroundColor: "red",
                margin: "2px 10px",
              }}
            >
              <img
                alt="logo"
                src={logo4i}
                width="100%"
                height="100%"
                style={{ objectFit: "contain" }}
              />
            </div>
            <div
              style={{
                height: "40px",
                width: "100px",
                // backgroundColor: "red",
                margin: "2px 10px",
              }}
            >
              <img
                alt="logo"
                src={logo5}
                width="100%"
                height="100%"
                style={{ objectFit: "contain" }}
              />
            </div>
            <div
              style={{
                height: "40px",
                width: "100px",
                // backgroundColor: "red",
                margin: "2px 10px",
              }}
            >
              <img
                alt="logo"
                src={logo6}
                width="100%"
                height="100%"
                style={{ objectFit: "contain" }}
              />
            </div>
            <div
              style={{
                height: "40px",
                width: "100px",
                // backgroundColor: "red",
                margin: "2px 10px",
              }}
            >
              <img
                alt="logo"
                src={logo7}
                width="100%"
                height="100%"
                style={{ objectFit: "contain" }}
              />
            </div>
            <div
              style={{
                height: "40px",
                width: "100px",
                // backgroundColor: "red",
                margin: "2px 10px",
              }}
            >
              <img
                alt="logo"
                src={logo8}
                width="100%"
                height="100%"
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>
        </div>
        <div
          style={{
            backgroundColor: "#F9AF2F",
            width: "100%",
            height: "80px",
            marginTop: "20px",
            bottom: "0",
            position: "absolute",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            fontWeight: "bold",
            padding: "0 10px",
            textAlign: "center",
          }}
        >
          [Webinar] wait... it's Q4 Already? Are you staffing Plans and Budget
          ready for 2021? Register now!
        </div>
      </div>
    </div>
  );
};

export default EpicHomeHero;
