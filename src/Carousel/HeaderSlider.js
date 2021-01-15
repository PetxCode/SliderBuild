import React from "react";
import { Carousel } from "antd";
import SliderComp from "./SliderComp";
import img1 from "./1.png";
import img2 from "./2.jpg";
import img3 from "./3.jpg";
import img4 from "./4.jpg";

const contentStyle = {
  // height: "160px",
  color: "#fff",
  // lineHeight: "10px",
  // textAlign: "center",
  background: "#364d79",
};

const HeaderSlider = () => {
  return (
    <div>
      <Carousel
        // autoplay
        effect="fade"
      >
        <div>
          <h3 style={contentStyle}>
            <SliderComp
              img={img1}
              direction="flex-end"
              BGcolor="rgba(54, 169, 212, 0.75)"
              title="What we do"
              desc="We provide engineers with everything they need to develop software—remotely and securely."
            />
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            <SliderComp
              img={img2}
              direction="flex-start"
              BGcolor="rgba(91, 175, 97, 0.75)"
              title="Where we work"
              desc="We provide engineers with everything they need to develop software—remotely and securely."
            />
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            <SliderComp
              img={img3}
              direction="flex-end"
              BGcolor="rgba(250, 185, 95, 0.75)"
              title="Our Story"
              desc="We provide engineers with everything they need to develop software—remotely and securely."
            />
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            <SliderComp
              img={img4}
              direction="center"
              BGcolor="rgba(189, 49, 25, 0.75)"
              title="where we are"
              desc="We provide engineers with everything they need to develop software—remotely and securely."
            />
          </h3>
        </div>
      </Carousel>
      ,
    </div>
  );
};

export default HeaderSlider;
