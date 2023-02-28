import "./App.css";
import { useEffect, useRef, useState } from "react";
import ToDo from "./components/ToDo";

function App() {
  //the purpose: saving a variable without causing a rerender.
  //const [count, setCount] = useState(0);
  const count = useRef(0); // {current: 0}
  //const username = useRef("");
const prevState = useRef("")//{current: ""}
  //console.log(username);
  // const count = {current: 0}
  const [inputVal, setInputVal] = useState("");

  //count.current +=1
  useEffect(() => {
    count.current = count.current + 1;
    prevState.current = inputVal
  });

  return (
    <div className="App">
      render count: {count.current} <hr/>
      previous state: {prevState.current}
      <hr />
      <input type={"text"} onChange={(e) => setInputVal(e.target.value)} />
      
      <hr/>
      <ToDo/>
    </div>
  );
}

export default App;
