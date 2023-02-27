import { useReducer } from "react";

// Styles
import "./App.scss";

const reducer = (state, action) => {
  switch (action.type) {
    case "a": {
      const student = state.b.find((student) => student.id === action.id);
      const newStateA = [...state.a, student];
      const newStateB = state.b.filter((student) => student.id !== action.id);

      return {
        a: newStateA,
        b: newStateB,
      };
    }

    case "b": {
      const student = state.a.find((student) => student.id === action.id);
      const newStateB = [...state.b, student];
      const newStateA = state.a.filter((student) => student.id !== action.id);

      return {
        a: newStateA,
        b: newStateB,
      };
    }
  }
};

const initialState = {
  a: [
    { id: 1, name: "John" },
    { id: 2, name: "Mary" },
    { id: 3, name: "Luke" },
    { id: 4, name: "Maria" },
  ],
  b: [],
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleMove = (classRoom, id) => {
    dispatch({ type: classRoom, id: id });
  };

  return (
    <div className="wrapper">
      <div data-testid="classrom-A">
        <h2>Classroom A</h2>
        {state.a.map((student) => (
          <div data-testid={student.name} key={student.id} className="student">
            <span>{student.name}</span>
            <button onClick={() => handleMove("b", student.id)}>
              Move to B
            </button>
          </div>
        ))}
      </div>

      <div data-testid="classrom-B">
        <h2>Classroom B</h2>
        {state.b.map((student) => (
          <div data-testid={student.name} key={student.id} className="student">
            <span>{student.name}</span>
            <button onClick={() => handleMove("a", student.id)}>
              Move to A
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;