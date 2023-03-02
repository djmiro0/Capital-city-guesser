import logo from './logo.svg';
import './App.css';
import { useReducer } from 'react';
//2 parameters
//state = current state & action = what do I have to do?
const reducer = (currentState, action) => {
    switch(action.type){
      case 'increment':
        return {count: currentState.count + 1}; //state is updated (count +1 )
      case 'decrement': 
        return {count: currentState.count - 1}; //state is updated again (count -1)
      default:
        throw new Error();
    }
}

function App() {
  
  const[state, dispatch] = useReducer(reducer,{count:0}) //we use dispatch to change the state

  // const[state, setState] = useState({count:0}); --> we use setState to change the state.
  return (
    <div className="App">
        Count: {state.count}
        <button onClick={() => dispatch({type:'decrement'})}>-</button>
        <button onClick={() => dispatch({type:'increment'})}>+</button>
    </div>
  );
}

export default App;
