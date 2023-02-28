import { useContext } from "react";
import { Store } from "../context/ArrayContext";

const Controls = () => {
  const { onPush, onPop, onUnshift, onShift } = useContext(Store)
  return (
    <div>
      <button onClick={onPush}>push</button>
      <button onClick={onPop}>pop</button>
      <button onClick={onUnshift}>unshift</button>
      <button onClick={onShift}>shift</button>
    </div>
  );
};

export default Controls;
