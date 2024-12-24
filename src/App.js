import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import Resume from "./components/Resume/ResumeNew";
import MailButton from './components/MailButton';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Redirect({ to }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = to;
    }, 2000);
    return () => clearTimeout(timer);
  }, [to]);

  return (
    <div style={{ color: "white", textAlign: "center", marginTop: "50px" }}>
      <h2>Redirecting...</h2>
      <p>
        You will be redirected shortly. If not,{" "}
        <a href={to} target="_blank" rel="noopener noreferrer">
          click here
        </a>.
      </p>
    </div>
  );
}

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />

          {/* Redirect Routes */}
          <Route path="/linkedin" element={<Redirect to="https://www.linkedin.com/in/it-guy-ahmad/" />} />
          <Route path="/x" element={<Redirect to="https://x.com/it_guy_ahmad" />} />
          <Route path="/discord" element={<Redirect to="https://discord.com/users/mrxehmad" />} />
          <Route path="/github" element={<Redirect to="https://github.com/mrxehmad" />} />
          <Route path="/instagram" element={<Redirect to="https://www.instagram.com/ehmi._/" />} />

          {/* Catch-all Route */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <MailButton />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
