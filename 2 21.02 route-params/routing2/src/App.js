import "./App.css";
import Header from "./components/Header";
import About from "./components/pages/About";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import { Routes, Route, Navigate } from "react-router-dom"
import SingleUser from "./components/pages/SingleUser";

function App() {
  const loggedin = true;

  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={loggedin ? <Home /> : <Navigate to="/login" /> } />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/user/:id" element={<SingleUser/>} />
        <Route path="*" element={<Navigate to="/" /> }/>
      </Routes>
    </div>
  );
}

export default App;
