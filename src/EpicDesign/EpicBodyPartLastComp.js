import React from "react";
import {
  BodyHolder,
  BodyContainer,
  BodyPart,
  BodyPartImg,
} from "./BodyStyle.js";

const EpicBodyPartLastComp = ({
  chngPosition,
  color,
  img,
  title,
  name,
  desc,
}) => {
  return (
    <div>
      <BodyHolder>
        <BodyContainer chngPosition={chngPosition}>
          <BodyPartImg>
            {img ? (
              <img
                atl="img"
                src={img}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "5px",
                  boxShadow: "0 5px 7px -3px rgba(0 , 0, 0, 0.75)",
                }}
              />
            ) : (
              <div>
                <div
                  style={{
                    fontWeight: "bold",
                    // color: color,
                    fontFamily: "Poppins",
                  }}
                >
                  YOUR TEAM,
                </div>
                <div
                  style={{
                    fontWeight: "bold",
                    color: "#F9AC31",
                    fontFamily: "Poppins",
                  }}
                >
                  OUR TALENT
                </div>
              </div>
            )}
          </BodyPartImg>
          <BodyPart>
            <div>
              <div
                style={{
                  fontSize: "15px",
                  fontWeight: "bold",
                  color: color,
                  fontFamily: "Poppins",
                }}
              >
                {title}
              </div>

              <div
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",

                  fontFamily: "Poppins",
                  marginTop: "10px",
                }}
              >
                {name}
              </div>
              <div
                style={{
                  fontSize: "15px",
                  fontFamily: "Poppins",
                  marginTop: "10px",
                }}
              >
                {desc}
              </div>
            </div>
          </BodyPart>
        </BodyContainer>
      </BodyHolder>
    </div>
  );
};

export default EpicBodyPartLastComp;
