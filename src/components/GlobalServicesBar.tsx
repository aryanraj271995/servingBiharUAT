import "./GlobalServicesBar.css";

const services = [
  { label: "Medical", icon: "🩺" },
  { label: "Emergency", icon: "🚑" },
  { label: "Local Services", icon: "🛠️" },
  { label: "Cab Booking", icon: "🚕" },
  { label: "Hotels", icon: "🏨" },
  { label: "Restaurants", icon: "🍽️" },
  { label: "Education", icon: "🎓" },
  { label: "Explore Cities", icon: "📍" },
  { label: "See More", icon: "➕" }
];

const GlobalServicesBar = () => {
  return (
    <div className="global-services-bar">
      {services.map((s, i) => (
        <div className="service-item" key={i}>
          <span className="icon">{s.icon}</span>
          <span className="text">{s.label}</span>
        </div>
      ))}
    </div>
  );
};

export default GlobalServicesBar;
