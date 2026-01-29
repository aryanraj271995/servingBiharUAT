import { useLocation } from "../context/LocationContext";
import "./Hotels.css";

const hotelCards = [
  { title: "Hotels", icon: "🏨", desc: "Luxury & budget hotels" },
  { title: "Guest Houses", icon: "🏠", desc: "Affordable guest stays" },
  { title: "Homestays", icon: "🛌", desc: "Family homestays" },
  { title: "Lodges", icon: "🏢", desc: "Short-term lodges" },
  { title: "Budget Hotels", icon: "💰", desc: "Low cost hotels" },
];

const Hotels = () => {
  const { city } = useLocation();

  return (
    <main className="hotels-page">
      <h1 className="hotels-title">
        Hotels in <span>{city || "Your City"}</span>
      </h1>

      <div className="hotels-grid">
        {hotelCards.map((h, i) => (
          <div key={i} className="hotels-card">
            <div className="hotels-icon">{h.icon}</div>
            <h3>{h.title}</h3>
            <p>{h.desc}</p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Hotels;
