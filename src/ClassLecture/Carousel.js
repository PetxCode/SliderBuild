import React from "react";
import { Carousel } from "antd";
import TheCarouselComp from "./TheCarouselComp";
import img1 from "./uba.jpg";
import img2 from "./me.jpg";
import img3 from "./dev.jpg";
import img4 from "./we.jpg";

const contentStyle = {
  height: "600px",
  color: "#fff",
  lineHeight: "30px",
  // textAlign: "center",
  background: "#364d79",
};

const CarouselBest = () => {
  return (
    <div>
      <Carousel autoplay>
        <div>
          <h3 style={contentStyle}>
            <TheCarouselComp
              img={img2}
              bgColor="rgba(54, 169, 212,0.75)"
              title=" CHANGE THE GAME"
              desc="  We provide engineers with everything they need to develop
              software—remotely and securely."
              btnColor="red"
              position="flex-start"
            />
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            <TheCarouselComp
              img={img1}
              bgColor="rgba(91, 175, 97, 0.75)"
              title="WHAT WE DO"
              desc=" We provide engineers with everything they need to develop
              software—remotely and securely."
              btnColor="#5BAF61"
              textArrangement="center"
              position="center"
            />
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            <TheCarouselComp
              img={img4}
              bgColor="rgba(65, 69, 80, .75)"
              title="OUR MOTIVATION"
              desc="We provide engineers with everything they need to develop
          software—remotely and securely."
              btnColor="#414550"
              position="flex-start"
            />
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            <TheCarouselComp
              img={img3}
              bgColor="rgba(249, 172, 49, 0.75)"
              title=" CHANGE THE GAME"
              desc="  We provide engineers with everything they need to develop
          software—remotely and securely."
              btnColor="#F9AC31"
              position="flex-end"
              textArrangement="right"
            />
          </h3>
        </div>
      </Carousel>
      ,
    </div>
  );
};

export default CarouselBest;
