const Controls = ({ onPush, onPop, onUnshift, onShift }) => {
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
