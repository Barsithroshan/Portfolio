import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import Developer from "./pages/Developer";
import DataAnalyst from "./pages/DataAnalyst";
import "./styles/global.css";
import "./styles/components.css";

export default function App() {
  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem("theme");
    return saved !== null ? saved === "dark" : true;
  });

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <Router>
      <ScrollToTop />
      <div className="app-canvas">
        {/* Ambient Animated Backdrop */}
        <div className="ambient-backdrop">
          <div className="mesh-sphere sphere-one"></div>
          <div className="mesh-sphere sphere-two"></div>
          <div className="mesh-sphere sphere-three"></div>
          <div className="grid-overlay"></div>
        </div>

        {/* Shared Responsive Navigation Bar */}
        <Navbar dark={dark} setDark={setDark} />

        {/* Main Routed Content */}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/developer" element={<Developer />} />
            <Route path="/data-analyst" element={<DataAnalyst />} />
            {/* Fallback to Home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Shared Footer */}
        <Footer />
      </div>
    </Router>
  );
}

