import "./App.css";
import Header from "./components/Header";
import About from "./components/pages/About";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
