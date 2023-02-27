import { useReducer, useState } from "react";
import "./App.css";
import User from "./components/User";

function App() {
  const [count, setCount] = useState(0); 

  const reducer = (state, action) => {
    switch (action.type) {
      case "increment":
        return {count: state.count + 1};
      case "decrement":
        return {count: state.count - 1};
        case "set-to-payload":
          return {count: action.payload}
      default:
        return state;
    }
  }
  const [state, dispatch] = useReducer(reducer, {count: 0});

  return (
    <div className="App">
      Count: {count}
      <br />
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(count + 1)}>+</button>
      <hr />
      Count with useReducer: {state.count}
      <br />
      <button onClick={() => dispatch({type: "decrement"})}>-</button>
      <button onClick={() => dispatch({type: "increment"})}>+</button>
      <button onClick={() => dispatch({type: "set-to-payload", payload: 101})} > set to payload </button>
      <User/>
    </div>
  );
}

export default App;
