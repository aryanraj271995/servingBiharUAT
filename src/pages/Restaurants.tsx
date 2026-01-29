import { useLocation } from "../context/LocationContext";
import "./Restaurants.css";

const restaurantCards = [
  { title: "Restaurants", icon: "🍽️", desc: "Family & fine dining" },
  { title: "Cafes", icon: "☕", desc: "Coffee & hangout places" },
  { title: "Fast Food", icon: "🍔", desc: "Quick bites" },
  { title: "Takeaway", icon: "🥡", desc: "Parcel & takeaway" },
  { title: "Veg / Non-Veg", icon: "🥗", desc: "Pure veg & non-veg" },
];

const Restaurants = () => {
  const { city } = useLocation();

  return (
    <main className="rest-page">
      <h1 className="rest-title">
        Restaurants in <span>{city || "Your City"}</span>
      </h1>

      <div className="rest-grid">
        {restaurantCards.map((r, i) => (
          <div key={i} className="rest-card">
            <div className="rest-icon">{r.icon}</div>
            <h3>{r.title}</h3>
            <p>{r.desc}</p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Restaurants;
