import React from "react";
import ButtonView from "./ButtonView";
import { MessageOutlined } from "@ant-design/icons";
import img from "./10.jpg";

const ButtonHolder = () => {
  return (
    <div>
      <center style={{ marginBottom: "50px" }}>Creating a Button</center>
      <center style={{ display: "flex", justifyContent: "space-around" }}>
        <ButtonView name="submit" color="green" />
        <ButtonView
          name="created"
          color="blue"
          backgroundColor="lightgray"
          Icon={MessageOutlined}
        />
        <ButtonView name="enter" color="red" />
      </center>

      <center>
        <div
          style={
            {
              // position: "absolute",
              // backgroundColor: "lightblue",
              // opacity: "0.1",
            }
          }
        >
          {" "}
        </div>
        <div
          style={{
            marginTop: "50px",
            color: "red",
            width: "100%",
            height: "550px",
            // position: "relative",
            overflow: "hidden",
            backgroundImage: `url(${img})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              // position: "absolute",
              backgroundColor: "rgba(0,0,5,0.8)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <div>First Block</div>
            <div>Second Block</div>
            <div>Third Block</div>
          </div>
        </div>
      </center>
    </div>
  );
};

export default ButtonHolder;
