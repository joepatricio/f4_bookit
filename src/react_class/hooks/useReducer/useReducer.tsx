import { useReducer, useState } from "react";

// // Define the reducer function
const counterReducer = (
  state: { count: number },
  action: { type: string; sample?: number }
) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: (state.count = 0) };
    default:
      return state;
  }
};

export const Counter = () => {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: "increment", sample: 200 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
};

const themeReducer = (
  state: { color: string; themeName: string },
  action: { type: string }
) => {
  switch (action.type) {
    case "GREEN":
      return { color: "green", themeName: "Green" };
    case "GRAY":
      return { color: "gray", themeName: "Gray" };
    case "BLUE":
      return { color: "blue", themeName: "Blue" };
    default:
      return state;
  }
};

export const ChangeTheme = () => {
  const [state, dispatch] = useReducer(themeReducer, {
    color: "red",
    themeName: "Red"
  });

  return (
    <>
      <button onClick={() => dispatch({ type: "GREEN" })}>GREEN</button>
      <button onClick={() => dispatch({ type: "GRAY" })}>BLACK</button>
      <button onClick={() => dispatch({ type: "BLUE" })}>BLUE</button>
      <div
        style={{
          marginTop: 10,
          height: "300px",
          width: "300px",
          backgroundColor: `${state.color}`
        }}
      >
        Current theme is {state.themeName}
      </div>
    </>
  );
};
