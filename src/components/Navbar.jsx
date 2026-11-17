import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Sun, Moon } from "lucide-react";
import "../styles/navbar.css";

export default function Navbar({ dark, setDark }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => setMobileMenuOpen(false);

  const isActive = (path) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <header className="site-header">
      <div className="wrap header-flex">
        {/* Left Side: Brand Logo & Title */}
        <Link to="/" className="brand-badge" onClick={closeMenu}>
          <span className="brand-icon">BR</span>
          <div className="brand-text">
            <span className="brand-title">BARSITH ROSHAN</span>
            <span className="brand-sub">PORTFOLIO</span>
          </div>
        </Link>

        {/* Mobile Hamburger Button */}
        <button
          className="mobile-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        {/* Right Side: Navigation Links */}
        <nav className={`nav-menu ${mobileMenuOpen ? "menu-open" : ""}`}>
          <Link
            to="/"
            className={`nav-link ${isActive("/") ? "active" : ""}`}
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link
            to="/developer"
            className={`nav-link ${isActive("/developer") ? "active" : ""}`}
            onClick={closeMenu}
          >
            Developer
          </Link>
          <Link
            to="/data-analyst"
            className={`nav-link ${isActive("/data-analyst") ? "active" : ""}`}
            onClick={closeMenu}
          >
            Data Analyst
          </Link>

          {/* Theme Toggle Button */}
          <button
            className="theme-toggle"
            onClick={() => setDark(!dark)}
            aria-label="Toggle color theme"
            title={dark ? "Switch to light mode" : "Switch to dark mode"}
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </nav>
      </div>
    </header>
  );
}

