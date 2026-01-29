import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";
import { useLocation } from "../../context/LocationContext";

const Header: React.FC = () => {
  const { city, setCity } = useLocation(); // ✅ SINGLE SOURCE OF TRUTH

  const [editCity, setEditCity] = useState(false);
  const [manualCity, setManualCity] = useState("");
  const [search, setSearch] = useState("");
  const [isCityConfirmed, setIsCityConfirmed] = useState<boolean>(
    city !== "Patna" ? true : false
  );

  const navigate = useNavigate();

  /* ===============================
     AUTO LOCATION DETECT
  ================================ */
  useEffect(() => {
    if (city && city !== "Patna") return; // already selected manually

    if (!navigator.geolocation) {
      setIsCityConfirmed(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const { latitude, longitude } = pos.coords;

        try {
          const res = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
          );
          const data = await res.json();
          const address = data.address || {};

          const detectedCity =
            address.city ||
            address.town ||
            address.village ||
            address.municipality;

          if (detectedCity) {
            setCity(detectedCity); // ✅ CONTEXT UPDATE
            setIsCityConfirmed(true);
          } else {
            setIsCityConfirmed(false);
          }
        } catch {
          setIsCityConfirmed(false);
        }
      },
      () => {
        setIsCityConfirmed(false);
      }
    );
  }, [setCity, city]);

  /* ===============================
     MANUAL CITY APPLY
  ================================ */
  const applyManualCity = () => {
    if (!manualCity.trim()) return;

    setCity(manualCity.trim()); // ✅ CONTEXT UPDATE
    setManualCity("");
    setEditCity(false);
    setIsCityConfirmed(true);
  };

  /* ===============================
     GUARDED NAVIGATION
  ================================ */
  const guardedNavigate = (path: string) => {
    if (!isCityConfirmed) {
      alert("Please allow location or enter your city first");
      return;
    }
    navigate(path);
  };

  /* ===============================
     SEARCH HANDLER
  ================================ */
  const handleSearch = () => {
    if (!isCityConfirmed) {
      alert("Please select your city first");
      return;
    }

    if (!search.trim()) return;

    const c = city.toLowerCase().replace(/\s+/g, "-");
    const s = search.toLowerCase().replace(/\s+/g, "-");

    navigate(`/bihar/${c}/${s}`);
  };

  return (
    <header className="sb-header">
      <div className="sb-header-container">
        {/* LOGO */}
        <Link to="/" className="sb-logo">
          Serving<span>Bihar</span>
        </Link>

        {/* SEARCH */}
        <div className="sb-search-box">
          <div className="sb-location">
            {!editCity ? (
              <span onClick={() => setEditCity(true)}>📍 {city}</span>
            ) : (
              <input
                type="text"
                placeholder="Enter city"
                value={manualCity}
                onChange={(e) => setManualCity(e.target.value)}
                onBlur={applyManualCity}
                onKeyDown={(e) => e.key === "Enter" && applyManualCity()}
              />
            )}
          </div>

          <input
            type="text"
            placeholder="Doctor, electrician, service search karein"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          />

          <button className="sb-search-btn" onClick={handleSearch}>
            🔍
          </button>
        </div>

        {/* MENU */}
        <nav className="sb-menu">
          <Link to="/">Home</Link>

          <span onClick={() => guardedNavigate("/services")}>
            Our Services
          </span>

          <span onClick={() => guardedNavigate("/explore-bihar")}>
            Explore Bihar
          </span>

          <span onClick={() => guardedNavigate("/cab")}>
            Cab Booking
          </span>

          <span onClick={() => guardedNavigate("/support")}>
            24/7 Support
          </span>
        </nav>
      </div>
    </header>
  );
};

export default Header;
