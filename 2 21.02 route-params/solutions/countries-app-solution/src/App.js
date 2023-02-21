import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import AllCountries from "./components/view/AllCountries";
import ByRegion from "./components/view/ByRegion";
import ByName from "./components/view/ByName";
import Header from "./components/Header";
import NotFound from "./components/view/NotFound";
import OneCountry from "./components/view/OneCountry";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<AllCountries />} />
        <Route path="/by-region" element={<ByRegion />} />
        <Route path="/by-name" element={<ByName />} />
        <Route path="/country/:code" element={<OneCountry />} />
        <Route path="/*" element={<NotFound />} />
        {/*if you want to send the user back to the home page instead of showing the NotFound page, you write:
      <Route path="/*" element={<Navigate to="/" />} />
  */}
      </Routes>
    </div>
  );
}

export default App;
