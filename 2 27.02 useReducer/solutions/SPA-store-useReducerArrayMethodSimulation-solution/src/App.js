import { useReducer } from 'react';
import Controls from './components/Controls.js';
import ArrayList from './components/ArrayList.js';

const initialState = [];
const reducer = (state, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case 'push': {
      return [...state, action.element];
    }
    case 'pop': {
      return state.slice(0, -1);
    }
    case 'unshift': {
      return [action.element, ...state];
    }
    case 'shift': {
      return state.slice(1);
    }
  }
  throw Error('Unknown action:', action.type);
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const onPush = () => dispatch({ type: 'push', element: new Date() });
  const onPop = () => dispatch({ type: 'pop' });
  const onUnshift = () => dispatch({ type: 'unshift', element: new Date() });
  const onShift = () => dispatch({ type: 'shift' });
  return (
    <div className="App">
      <ArrayList state={state} />
      <Controls
        onPush={onPush}
        onPop={onPop}
        onUnshift={onUnshift}
        onShift={onShift}
      />
    </div>
  );
}

export default App;
