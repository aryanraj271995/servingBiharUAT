import "./Header.css";
import { useLocation } from "../../context/LocationContext";
import { NavLink, Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Header: React.FC = () => {
  const { city, isAutoDetected, setManualCity } = useLocation();

  const [inputCity, setInputCity] = useState(city);
  const [menuOpen, setMenuOpen] = useState(false);

  // city change hone par input sync
  useEffect(() => {
    setInputCity(city);
  }, [city]);

  const commitCity = () => {
    if (!inputCity.trim()) return;

    console.log("SETTING CITY:", inputCity);
    setManualCity(inputCity.trim());
  };

  return (
    <>
      <header className="sb-header">
        <div className="sb-header-bg">
          <div className="container sb-header-inner">

            {/* ✅ LOGO – SIMPLE HOME LINK (NO ACTIVE STATE) */}
            <Link to="/" className="sb-logo">
              Serving Bihar
            </Link>

            <div className="sb-search">
              <input type="text" placeholder="Search services" />

              <div className="sb-location-wrapper">
                <input
                  type="text"
                  placeholder="Enter location"
                  value={inputCity}
                  onChange={(e) => setInputCity(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") commitCity();
                  }}
                  onBlur={commitCity}
                />

                {city && isAutoDetected && (
                  <span className="sb-location-badge">Auto</span>
                )}
              </div>

              <button>Search</button>
            </div>

            <nav className="sb-nav">
              <NavLink to="/" end>Home</NavLink>
              <NavLink to="/serving-cities">Serving Cities</NavLink>
              <NavLink to="/explore-bihar">Explore Bihar</NavLink>
              <NavLink to="/BhaiyaGPT">BhaiyaGPT</NavLink>
            </nav>

            <button
              className="sb-menu-btn"
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => setMenuOpen(true)}
            >
              ☰
            </button>
          </div>
        </div>
      </header>

      {menuOpen && (
        <div className="sb-mobile-menu">
          <button
            className="sb-close-btn"
            onClick={() => setMenuOpen(false)}
          >
            ✕
          </button>

          <NavLink to="/" end onClick={() => setMenuOpen(false)}>Home</NavLink>
          <NavLink to="/serving-cities" onClick={() => setMenuOpen(false)}>
            Serving Cities
          </NavLink>
          <NavLink to="/explore-bihar" onClick={() => setMenuOpen(false)}>
            Explore Bihar
          </NavLink>
          <NavLink to="/services" onClick={() => setMenuOpen(false)}>
            Local Services
          </NavLink>
        </div>
      )}
    </>
  );
};

export default Header;
