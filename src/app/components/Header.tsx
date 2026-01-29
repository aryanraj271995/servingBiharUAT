import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";

const categories = [
  { key: "medical", label: "Medical", emoji: "🩺" },
  { key: "cab", label: "Cab", emoji: "🚕" },
  { key: "electrician", label: "Electrician", emoji: "⚡" },
  { key: "plumber", label: "Plumber", emoji: "🔧" },
  { key: "emergency", label: "Emergency", emoji: "🚨" },
];

export default function Header() {
  const navigate = useNavigate();

  const [city, setCity] = useState<string | null>(null);
  const [manualCity, setManualCity] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");

  const [manualForced, setManualForced] = useState(false);

  /* ---------- localStorage helpers (FIXED) ---------- */
  const getSavedCity = () => {
    try {
      return localStorage.getItem("city");
    } catch {
      return null;
    }
  };

  const saveCity = (value: string, source: "manual" | "auto") => {
    try {
      localStorage.setItem("city", value);
      localStorage.setItem("citySource", source);
    } catch {}
  };

  /* ---------- AUTO LOCATION ---------- */
  useEffect(() => {
    const savedCity = getSavedCity();

    if (savedCity) {
      setCity(savedCity);
      setLoading(false);
      return;
    }

    if (!navigator.geolocation) {
  setLoading(false);
  setShowModal(true);
  setManualForced(true);
  return;
}


    const timer = setTimeout(() => {
      navigator.geolocation.getCurrentPosition(
        async (pos) => {
          try {
            const res = await fetch(
              `https://nominatim.openstreetmap.org/reverse?format=json&lat=${pos.coords.latitude}&lon=${pos.coords.longitude}`
            );
            const data = await res.json();

            const detectedCity =
              data.address.city ||
              data.address.town ||
              data.address.village;

            if (detectedCity && !manualForced) {
              saveCity(detectedCity, "auto");
              setCity(detectedCity);
              setShowModal(false);
            }
          } catch {
            if (!manualForced) setShowModal(true);
          } finally {
            setLoading(false);
          }
        },
        () => {
          setLoading(false);
          if (!manualForced) setShowModal(true);
        },
        { timeout: 8000 }
      );
    }, 1200);

    return () => clearTimeout(timer);
  }, [manualForced]);

  /* ---------- MANUAL CITY ---------- */
  const submitCity = () => {
    if (!manualCity.trim()) return;
    saveCity(manualCity.trim(), "manual");
    setCity(manualCity.trim());
    setShowModal(false);
    setManualForced(false);
  };

  /* ---------- SEARCH ---------- */
  const doSearch = () => {
    if (!query.trim()) return;
    navigate(`/services/search?q=${encodeURIComponent(query)}`);
  };

  return (
    <>
      <header className="sb-header">
        <div className="sb-top">
          <h4>Serving Bihar👋</h4>

          <p
            className="location-text"
            onClick={() => {
              setManualForced(true);
              setShowModal(true);
            }}
          >
            {loading
              ? "Detecting your location... (tap to enter manually)"
              : city
              ? city
              : "Tap to select location"}
          </p>
        </div>

        <div className="sb-search">
          <input
            placeholder="Search services (doctor, cab, electrician)"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && doSearch()}
          />
          <button onClick={doSearch}>Search</button>
        </div>

        <div className="sb-categories">
          {categories.map((cat) => (
            <div
              key={cat.key}
              className="sb-chip"
              onClick={() => navigate(`/services/${cat.key}`)}
            >
              <span className="sb-chip-icon">{cat.emoji}</span>
              <span>{cat.label}</span>
            </div>
          ))}
        </div>
      </header>

      {showModal && (
        <div className="loc-overlay">
          <div className="loc-box">
            <h3>Select your city</h3>
            <p>This helps us show nearby services</p>

            <input
              placeholder="Enter city name"
              value={manualCity}
              onChange={(e) => setManualCity(e.target.value)}
            />

            <button onClick={submitCity}>Confirm Location</button>
          </div>
        </div>
      )}
    </>
  );
}
