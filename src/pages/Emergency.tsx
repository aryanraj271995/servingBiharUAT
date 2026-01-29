import "./Emergency.css";
import { useLocation } from "../context/LocationContext";

const emergencyCards = [
  {
    title: "Ambulance",
    icon: "🚑",
    desc: "Emergency ambulance services",
  },
  {
    title: "Police",
    icon: "🚓",
    desc: "Police stations & helpline",
  },
  {
    title: "Fire Brigade",
    icon: "🚒",
    desc: "Fire emergency services",
  },
  {
    title: "Emergency Numbers",
    icon: "☎️",
    desc: "Important helpline numbers",
  },
  {
    title: "Blood Banks",
    icon: "🩸",
    desc: "Blood banks & donors",
  },
];

const Emergency = () => {
  const { city } = useLocation();

  return (
    <main className="emergency-page">
      <h1 className="emergency-title">
        Emergency Services in <span>{city || "Your City"}</span>
      </h1>

      <div className="emergency-grid">
        {emergencyCards.map((card, index) => (
          <div className="emergency-card" key={index}>
            <div className="emergency-icon">{card.icon}</div>
            <h3>{card.title}</h3>
            <p>{card.desc}</p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Emergency;
