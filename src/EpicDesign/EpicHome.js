import React from "react";
import EpicBody from "./EpicBody";
import EpicBody2 from "./EpicBody2";
import EpicBodyPartLast from "./EpicBodyPartLast";
import EpicHomeHero from "./EpicHomeHero";
import EpicPartners from "./EpicPartners";

const EpicHome = () => {
  return (
    <div>
      <EpicHomeHero />
      <EpicBody />
      <EpicBody2 />
      <EpicPartners />
      <EpicBodyPartLast />
    </div>
  );
};

export default EpicHome;
