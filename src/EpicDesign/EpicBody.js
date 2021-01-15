import React from "react";

const EpicBody = () => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "750px",
          height: "500px",
          // backgroundColor: "red",
          display: "flex",
          justifyContent: "space-between",
          padding: "50px 0px",
          margin: "auto",
        }}
      >
        <div
          style={{
            // fontWeight: "bold",
            fontSize: "80px",
            // width: "550px",
            fontFamily: "Poppins",
            lineHeight: "1",
            // backgroundColor: "red",
          }}
        >
          <div
            style={{
              color: "#4050AA",
            }}
          >
            WE BUILD BETTER
          </div>
          <div
            style={{
              color: "#F9AF2F",
            }}
          >
            REMOTE TEAMS
          </div>
        </div>
        <div
          style={{
            fontWeight: "bold",
            color: "#4050AA",
            fontSize: "20px",
            // marginRight: "20px",
            // width: "300px",
            // backgroundColor: "red",
          }}
        >
          Hundreds of engineering teams scale smarter with Andela.
        </div>
      </div>
    </div>
  );
};

export default EpicBody;
