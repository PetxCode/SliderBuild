import React, { useContext } from "react";
import AppContext from "../ContextAPI/AppContext";

function FeedView() {
  const { mgs } = useContext(AppContext);
  return (
    <div>
      This is the View page
      <center>{mgs}</center>
    </div>
  );
}

export default FeedView;
