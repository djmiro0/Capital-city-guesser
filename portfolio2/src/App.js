import "./App.css";
import Header from "./components/Header";
import { Helmet } from "react-helmet";
import { Routes, Route, Outlet } from "react-router-dom";
import NoPage from "./components/NoPage";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import LanguageSelector from "./components/Language/LanguageSelector";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";

function App() {
  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Portfolio</title>
        <link rel="canonical" href="http://mysite.com/example" />
        <meta name="description" content="portfolio" />
      </Helmet>
      <div className="header-media">
        <Header />
        <LanguageSelector />
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
