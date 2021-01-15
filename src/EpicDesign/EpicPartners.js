import React from "react";
import log1 from "./fb.png";
import log2 from "./psight.png";
import log3 from "./uda.png";
import log4 from "./msc.png";
import log5 from "./pixG.png";

const EpicPartners = () => {
  return (
    <div>
      <div>
        <div
          style={{
            marginTop: "30px",
            marginLeft: "40px",
            fontSize: "20px",
            fontFamily: "Poppins",
          }}
        >
          Preferred training partner of
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <div>
            <img
              alt="log"
              src={log5}
              style={{
                width: "150px",
                height: "30px",
                objectFit: "contain",
              }}
            />
          </div>
          <div>
            <img
              alt="log"
              src={log1}
              style={{
                width: "150px",
                height: "30px",
                objectFit: "contain",
              }}
            />
          </div>
          <div>
            <img
              alt="log"
              src={log2}
              style={{
                width: "150px",
                height: "30px",
                objectFit: "contain",
              }}
            />
          </div>
          <div>
            <img
              alt="log"
              src={log3}
              style={{
                width: "150px",
                height: "30px",
                objectFit: "contain",
              }}
            />
          </div>
          <div>
            <img
              alt="log"
              src={log4}
              style={{
                width: "150px",
                height: "30px",
                objectFit: "contain",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EpicPartners;
