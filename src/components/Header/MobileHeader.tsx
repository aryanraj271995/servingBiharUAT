import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useLocation } from "../../context/LocationContext";
import "./Header.css";

const MobileHeader: React.FC = () => {
  const { city, isAutoDetected, setManualCity } = useLocation();

  const [inputCity, setInputCity] = useState(city);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setInputCity(city);
  }, [city]);

  return (
    <>
      {/* MOBILE HEADER */}
      <header
        className="sb-m-header sb-mobile-only"
        style={{ position: "relative", zIndex: 9999 }}   // 🔑 TOP LAYER
      >
        <div className="sb-m-top">
          {/* 🔑 MENU BUTTON — FORCE CLICKABLE */}
          <button
            className="sb-m-menu"
            style={{ position: "relative", zIndex: 10000 }} // 🔑 CRITICAL
            onClick={() => {
              console.log("MOBILE MENU CLICKED");
              setMenuOpen(true);
            }}
          >
            ☰
          </button>

          <div className="sb-m-logo">Serving Bihar</div>
        </div>

        {/* CITY INPUT */}
        <div className="sb-m-search">
          <div className="sb-location-wrapper">
            <input
              value={inputCity}
              onChange={(e) => setInputCity(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && inputCity.trim()) {
                  setManualCity(inputCity.trim());
                }
              }}
              placeholder="Enter city"
            />

            {isAutoDetected && (
              <span className="sb-location-badge">Auto</span>
            )}
          </div>
        </div>
      </header>

      {/* MOBILE DRAWER */}
      {menuOpen && (
        <div className="sb-mobile-menu">
          <button
            className="sb-close-btn"
            onClick={() => setMenuOpen(false)}
          >
            ✕
          </button>

          <NavLink to="/" onClick={() => setMenuOpen(false)}>
            Home
          </NavLink>
          <NavLink to="/serving-cities" onClick={() => setMenuOpen(false)}>
            Serving Cities
          </NavLink>
          <NavLink to="/explore-bihar" onClick={() => setMenuOpen(false)}>
            Explore Bihar
          </NavLink>
          <NavLink to="/BhaiyaGPT" onClick={() => setMenuOpen(false)}>
            BhaiyaGPT
          </NavLink>
        </div>
      )}
    </>
  );
};

export default MobileHeader;
