import React from "react";
import EpicBodyComp from "./EpicBodyComp";
import EpicBodyPix from "./EpicBodyPix";

const EpicBody2 = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "80%",
        }}
      >
        <div
          style={{
            display: "flex",
            padding: "0 30px",
          }}
        >
          <div>
            <div style={{ margin: "0 10px" }}>
              {" "}
              <EpicBodyComp
                header="Global talent sourcing"
                number="200,000"
                sub="Application"
                desc="Our expert talent team ensures we source the right talent at the right
                time."
                color="#49AAAF"
              />
            </div>
            <div style={{ margin: "0 10px" }}>
              <EpicBodyComp
                header="Best in class assessments "
                number="2% "
                sub="get offers"
                desc="We assess engineering skills against a robust competency framework."
                color="#E25795"
              />
            </div>
          </div>
          <div>
            <div style={{ margin: "0 10px" }}>
              <EpicBodyComp
                header=" Data-driven matching"
                number=" 96%"
                sub="successful match rate"
                color="#98BE24"
                desc="We evaluate your technical and cultural needs to match you with engineers who are passionate about your company."
              />
            </div>
            <div style={{ margin: "0 10px" }}>
              <EpicBodyComp
                header="Global Infrastructure & HR"
                number="20+ Month"
                sub="long-term engagements"
                desc="We provide engineers with everything they need to develop software—remotely and securely."
                color="#F9AE30"
              />
            </div>
          </div>
        </div>
        <div>
          {" "}
          <EpicBodyPix />{" "}
        </div>
      </div>
    </div>
  );
};

export default EpicBody2;
