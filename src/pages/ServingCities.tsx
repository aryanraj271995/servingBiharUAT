import "./ServingCities.css";
import { useLocation } from "../context/LocationContext";
import { useNavigate } from "react-router-dom";

const cards = [
  { title: "Live Bazar", subtitle: "Daily Local Market", icon: "🛒", color: "#6366f1" },
  { title: "Street Market", subtitle: "Roadside Shops", icon: "🏬", color: "#ec4899" },
  { title: "Grocery Stores", subtitle: "Daily Essentials", icon: "🥦", color: "#22c55e" },
  { title: "Fruits & Veggi", subtitle: "Fresh Produce", icon: "🍎", color: "#f97316" },
  { title: "Clothing Store", subtitle: "Fashion & Wear", icon: "👕", color: "#a855f7" },
  { title: "Showrooms Outlet", subtitle: "Brands & Deals", icon: "🏷️", color: "#0ea5e9" },
  { title: "Beauty Saloon", subtitle: "Grooming & Care", icon: "💇", color: "#e11d48" },
  { title: "Rooms & Flats", subtitle: "Rental & Stay", icon: "🏠", color: "#64748b" },
  { title: "Garage Center", subtitle: "Vehicle Services", icon: "🛠️", color: "#475569" },
  { title: "Live Restaurants", subtitle: "Food & Dining", icon: "🍽️", color: "#f59e0b" },
  { title: "Bookstore & Stationery", subtitle: "Books & Study", icon: "📚", color: "#2563eb" },
  { title: "Explore City", subtitle: "Places & Services", icon: "📍", color: "#16a34a" },
];

const ServingCities = () => {
  const { city } = useLocation();
  const navigate = useNavigate();

  const toSlug = (text: string) =>
    text.toLowerCase().replace(/ & /g, "-").replace(/\s+/g, "-");

  return (
    <main className="sc-page">
      <h1 className="sc-title">
        Welcome to <span>{city || "Your City"}</span>
      </h1>

      <div className="sc-grid">
        {cards.map((card, index) => (
          <div
            className="sc-card"
            key={index}
            onClick={() =>
              navigate(`/${city || "unknown"}/${toSlug(card.title)}`)
            }
          >
            <div className="sc-icon" style={{ background: card.color }}>
              {card.icon}
            </div>
            <h3>{card.title}</h3>
            <p>{card.subtitle}</p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default ServingCities;
