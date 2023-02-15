import './App.css';
import ExampleComponent from './components/ExampleComponent';
import FetchDataComponent from './components/FetchDataComponent';
import Greeting from './components/Greeting';
import {useState} from 'react';
import RepeatMessage from './components/RepeatMessage';
import TimerComponent from './components/TimerComponent';


function App() {
  const [name, setName] = useState("John");

  return (
    <div className="App">
      <ExampleComponent />
      <FetchDataComponent />
      <input type="text" onChange={(event) => setName(event.target.value)} />
      <Greeting name={name}/>
      <RepeatMessage message={name}  />
      <TimerComponent />
    </div>
  );
}

export default App;
