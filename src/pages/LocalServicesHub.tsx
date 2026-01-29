import "./LocalServicesHub.css";
import { useLocation } from "../context/LocationContext";

const serviceCards = [
  { title: "Electrician", icon: "💡", desc: "Electrical repair & wiring" },
  { title: "Plumber", icon: "🚿", desc: "Plumbing & water services" },
  { title: "Carpenter", icon: "🪚", desc: "Furniture & wood work" },
  { title: "Cleaning Services", icon: "🧹", desc: "Home & office cleaning" },
  { title: "AC / Appliance Repair", icon: "❄️", desc: "AC, fridge & appliance repair" },
  { title: "Pest Control", icon: "🐜", desc: "Pest & termite control" },
];

const LocalServicesHub = () => {
  const { city } = useLocation();

  return (
    <div className="lsh-page">
      {/* HERO SECTION */}
      <section className="lsh-hero">
        <div className="lsh-hero-left">
          <span className="lsh-badge">
            Local Services in {city || "Bihar"}
          </span>

          <h1>
            Trusted Local Services <br />
            <span>Near Your Home</span>
          </h1>

          <p className="lsh-subtitle">
            Skilled professionals for daily household and repair needs.
          </p>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="lsh-services">
        {serviceCards.map((card, index) => (
          <div className="lsh-card" key={index}>
            <div className="lsh-icon">{card.icon}</div>
            <h3>{card.title}</h3>
            <p>{card.desc}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default LocalServicesHub;
