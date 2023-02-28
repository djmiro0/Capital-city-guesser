import "./App.css";
import { useEffect, useRef, useState, useCallback } from "react";
import ToDo from "./components/ToDo";
import List from "./components/List";

function App() {
  //the purpose: saving a variable without causing a rerender.
  //const [count, setCount] = useState(0);
  const count = useRef(0); // {current: 0}
  //const username = useRef("");
  const prevState = useRef(""); //{current: ""}
  //console.log(username);
  // const count = {current: 0}
  const [inputVal, setInputVal] = useState("");

  const [myVar, setMyVar] = useState(0)

  //count.current +=1
  useEffect(() => {
    count.current = count.current + 1;
    prevState.current = inputVal;
  });

  const getItems = useCallback(() => {
    return [myVar, myVar + 1, myVar + 2];
  }, [myVar]);

  return (
    <div className="App">
    <button onClick={()=> setMyVar(myVar +1)}>change myVar</button>
      render count: {count.current} <hr />
      previous state: {prevState.current}
      <hr />
      <input type={"text"} onChange={(e) => setInputVal(e.target.value)} />
      <hr />
      <ToDo />
      <hr />
      <List getItems={getItems} />
    </div>
  );
}

export default App;
