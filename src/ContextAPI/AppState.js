// import AppContext from "./AppContext";
import React from "react";
import AppContext from "./AppContext";
const AppState = (props) => {
  return (
    <AppContext.Provider
      value={{
        msg: "coming from context",
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
export default AppState;
