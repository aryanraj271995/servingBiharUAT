import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./MobileCategoryGrid.css";

const categories = [
  {
    key: "restaurants",
    title: "Restaurants",
    subtitle: "Food & Dining",
    color: "#ff7a45",
    icon: "🍽️",
  },
  {
    key: "hospital",
    title: "Hospital & Clinic",
    subtitle: "Healthcare Services",
    color: "#0ea5e9",
    icon: "🏥",
  },
  {
    key: "beauty",
    title: "Beauty & Spa",
    subtitle: "Salon & Wellness",
    color: "#ec4899",
    icon: "💆‍♀️",
  },
  {
    key: "education",
    title: "Education",
    subtitle: "Schools & Coaching",
    color: "#22c55e",
    icon: "🎓",
  },
  {
    key: "gym",
    title: "Gym & Fitness",
    subtitle: "Health & Fitness",
    color: "#f59e0b",
    icon: "🏋️",
  },
  {
    key: "pg",
    title: "PG / Hostels",
    subtitle: "Accommodation",
    color: "#6366f1",
    icon: "🏨",
  },
  {
    key: "estate",
    title: "Estate Agent",
    subtitle: "Property Services",
    color: "#6b7280",
    icon: "🏢",
  },
  {
    key: "it",
    title: "IT Companies",
    subtitle: "Tech Services",
    color: "#0284c7",
    icon: "💻",
  },
  {
    key: "fashion",
    title: "Fashion",
    subtitle: "Clothing & Lifestyle",
    color: "#a855f7",
    icon: "👕",
  },
  {
    key: "repair",
    title: "Repair & Services",
    subtitle: "Home & Utility",
    color: "#64748b",
    icon: "🛠️",
  },
  {
    key: "cab",
    title: "Cab & Transport",
    subtitle: "Local & Outstation",
    color: "#2563eb",
    icon: "🚕",
  },
  {
    key: "home",
    title: "Home Services",
    subtitle: "Cleaning & Maintenance",
    color: "#16a34a",
    icon: "🏠",
  },
];

export default function MobileCategoryGrid() {
  const navigate = useNavigate();

  const [city, setCity] = useState(
    localStorage.getItem("city") || "Patna"
  );

  /* ✅ ONLY FIX: polling localStorage (same-tab safe) */
  useEffect(() => {
    const interval = setInterval(() => {
      const updatedCity = localStorage.getItem("city");
      if (updatedCity && updatedCity !== city) {
        setCity(updatedCity);
      }
    }, 500); // half second, very light

    return () => clearInterval(interval);
  }, [city]);

  const citySource = localStorage.getItem("citySource") || "manual";

  return (
    <section className="mobile-category-section">
      <div style={{ marginBottom: "12px" }}>
        <h3 style={{ marginBottom: "4px" }}>
          Explore Categories in <span>{city}</span>
        </h3>

        <p style={{ fontSize: "12px", color: "#6b7280" }}>
          {citySource === "auto"
            ? "Location auto-detected"
            : "Location selected manually"}
        </p>
      </div>

      <div className="mobile-category-grid">
        {categories.map((cat) => (
          <div
            key={cat.key}
            className="mobile-category-card"
            onClick={() =>
              navigate(`/services/${cat.key}`, {
                state: { city },
              })
            }
          >
            <div
              className="mobile-category-icon"
              style={{ backgroundColor: cat.color }}
            >
              {cat.icon}
            </div>

            <div className="mobile-category-text">
              <h4>{cat.title}</h4>
              <p>{cat.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
