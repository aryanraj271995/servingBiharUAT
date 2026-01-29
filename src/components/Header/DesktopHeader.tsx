import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useLocation } from "../../context/LocationContext";
import "./Header.css";

const DesktopHeader: React.FC = () => {
  // 🔑 CONTEXT
  const { city, isAutoDetected, setManualCity } = useLocation();

  // 🔑 LOCAL INPUT STATE (typing ke liye)
  const [inputCity, setInputCity] = useState(city);

  // 🔁 city change ho to input sync rahe
  useEffect(() => {
    setInputCity(city);
  }, [city]);

  const handleCitySubmit = () => {
    if (!inputCity.trim()) return;
    setManualCity(inputCity.trim());
  };

  return (
    <header className="sb-header">
      <div className="sb-header-bg">
        <div className="sb-header-inner sb-desktop-only">

          {/* LOGO */}
          <div className="sb-logo">Serving Bihar</div>

          {/* SEARCH + LOCATION */}
          <div className="sb-search">

            <input placeholder="Search services" />

            {/* 🔑 EXISTING LOCATION WRAPPER */}
            <div className="sb-location-wrapper">
              <input
                value={inputCity}
                onChange={(e) => setInputCity(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleCitySubmit()}
                placeholder="Patna"
              />

              {/* 🔑 AUTO BADGE (CSS already present) */}
              {isAutoDetected && (
                <span className="sb-location-badge">Auto</span>
              )}
            </div>

            <button>Search</button>
          </div>

          {/* NAV */}
          <nav className="sb-nav">
            <NavLink to="/" end>Home</NavLink>
            <NavLink to="/serving-cities">Serving Cities</NavLink>
            <NavLink to="/explore-bihar">Explore Bihar</NavLink>
            <NavLink to="/BhaiyaGPT">BhaiyaGPT</NavLink>
          </nav>

        </div>
      </div>
    </header>
  );
};

export default DesktopHeader;
