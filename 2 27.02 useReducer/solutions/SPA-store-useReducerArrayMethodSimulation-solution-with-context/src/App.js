import Controls from "./components/Controls.js";
import ArrayList from "./components/ArrayList.js";
import ArrayContextProvider from "./context/ArrayContext.js";



function App() {
 
  return (
    <div className="App">
      <ArrayContextProvider>
        <ArrayList />
        <Controls />
      </ArrayContextProvider>
    </div>
  );
}

export default App;
