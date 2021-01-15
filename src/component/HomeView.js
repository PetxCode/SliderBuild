import { Button } from "antd";
import React, { useReducer, useState, useContext } from "react";
import AppContext from "../ContextAPI/AppContext";
const initialState = {
  count: 0,
};

const stateFunction = (state, action) => {
  switch (action.type) {
    case "A":
      return {
        ...state,
        count: state.count + 1,
      };
    case "B":
      return {
        ...state,
        count: state.count - 1,
      };
    case "C":
      return {
        ...state,
        count: action.payload,
      };

    default:
      return state;
  }
};

function HomeView() {
  const { mgs } = useContext(AppContext);
  const [state, dispatch] = useReducer(stateFunction, initialState);
  const [input, setInput] = useState(0);
  return (
    <div>
      <div>
        <input
          style={{
            width: "300px",
            height: "30px",
            borderRadius: "40px",
            outlineWidth: "0",
            padding: "20px",
            marginTop: "30px",
            marginRight: "30px",
          }}
          type="number"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <Button
          style={{
            borderRadius: "20px",
            backgroundColor: "lightblue",
            color: "white",
            fontWeight: "bold",
          }}
          onClick={() => {
            dispatch({
              type: "C",
              payload: input,
            });
          }}
        >
          InitCount
        </Button>

        <div
          style={{
            marginTop: "60px",
          }}
        >
          <div></div>
          <p> {state.count} </p>

          <center
            style={{
              width: "200px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Button
              style={{
                borderRadius: "20px",
                backgroundColor: "red",
                color: "white",
                fontWeight: "bold",
                marginRight: "20px",
              }}
              onClick={() => {
                dispatch({
                  type: "B",
                });
              }}
            >
              Decrease
            </Button>

            <Button
              style={{
                borderRadius: "20px",
                backgroundColor: "lightgreen",
                color: "white",
                fontWeight: "bold",
                color: "black",
              }}
              onClick={() => {
                dispatch({
                  type: "A",
                });
              }}
            >
              Increase
            </Button>
          </center>
        </div>
        <p>{mgs}</p>
      </div>
    </div>
  );
}

export default HomeView;
