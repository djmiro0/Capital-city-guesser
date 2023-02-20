import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/views/Home";
import Login from "./components/views/Login";
import Signup from "./components/views/Signup";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<div> 404 page not found </div>} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
