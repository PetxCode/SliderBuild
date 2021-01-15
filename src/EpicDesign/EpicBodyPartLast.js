import React from "react";
import EpicBodyPartLastComp from "./EpicBodyPartLastComp";
import pix from "./pix.png";
import pix1 from "./img3.png";
import pix2 from "./img1.png";

const EpicBodyPartLast = () => {
  return (
    <div>
      <EpicBodyPartLastComp
        chngPosition
        color="#E25795"
        title="DEDICATED"
        name=" Successful engineering teams require the right talent at the
      right time."
        desc="We know that effective engineering teams require more than code
      junkies to be successful. Andela engineers are full-time
      technologists who engage proactively with your team, manage
      stakeholders effectively, and excel at communication. In
      addition, our reputation as a top employer on the African
      continent means our engineers stay for the long term."
      />

      <EpicBodyPartLastComp
        img={pix}
        color="#49AAAF"
        title="EMBEDDED"
        name=" Andela engineers use your company systems to support a fully embedded workflow."
        desc="Our engineers adopt your workflows and preferred communication platforms like Slack, Microsoft teams, and more. All engineers are native English speakers and overlap with your teams for at least 5 working hours per day and dedicate the rest of their day to digging in and focusing on important tasks at hand. And, every engagement includes on-boarding to ensure your distributed team hits the ground running."
      />

      <EpicBodyPartLastComp
        chngPosition
        img={pix1}
        color="#98BE24"
        title="SUPPORTED"
        name="Dedicated technical support and mentorship every step of the way "
        desc=" Our dedicated account and engineering managers work closely with your team to ensure the continued success of your distributed engineering team. From communicating project goals to maintaining the highest level of security, we’ve seen—and done—it all."
      />
    </div>
  );
};

export default EpicBodyPartLast;

// <EpicBodyPartLastComp img={pix2} title="OUR EXPERTISE" name=" "/>
