import {useState, useMemo} from 'react'

export default function ToDo() {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);
    //the purpose: to save a value (that usually takes a long time to be calculated)
    // in the caches in order to save time and have a better performance.
    const calculation = useMemo(()=> expensiveCalculation(count), [count]);
  
    const increment = () => {
      setCount((c) => c + 1);
    };
    const addTodo = () => {
      setTodos((t) => [...t, "New Todo"]);
    };
  
    return (
      <div>
        <div>
          <h2>My Todos</h2>
          {todos.map((todo, index) => {
            return <p key={index}>{todo}</p>;
          })}
          <button onClick={addTodo}>Add Todo</button>
        </div>
        <hr />
        <div>
          Count: {count}
          <button onClick={increment}>+</button>
          <h2>Expensive Calculation</h2>
          {calculation}
        </div>
      </div>
    );
  };
  
  const expensiveCalculation = (num) => {
    console.log("Calculating...");
    for (let i = 0; i < 1000000000; i++) {
      num += 1;
    }
    return num;
  };