import './App.css';
import Infoboard from './Components/Infoboard';
import Scoreboard from './Components/Scoreboard';
import ScoreContextProvider from './Contexts/ScoreContext';

function App() {
  return (
    <ScoreContextProvider>
    <div className="App">
      <h1>Score Board</h1>
      <Scoreboard />
      <Infoboard />
    </div>
    </ScoreContextProvider>
  );
}

export default App;
