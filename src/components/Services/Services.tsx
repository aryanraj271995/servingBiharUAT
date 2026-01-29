import "./services.css";
import { useNavigate } from "react-router-dom";

type Service = {
  title: string;
  icon: string;
  path: string;
};

const services: Service[] = [
  { title: "Medical", icon: "🩺", path: "/medical" },
  { title: "Emergency", icon: "🚑", path: "/emergency" },
  { title: "Local Services", icon: "🛠️", path: "/local-services" },
  { title: "Cab Booking", icon: "🚕", path: "/cab-booking" },
  { title: "Hotels", icon: "🏨", path: "/hotels" },
  { title: "Restaurants", icon: "🍽️", path: "/restaurants" },
  { title: "Education", icon: "🎓", path: "/education" },
  { title: "Explore Cities", icon: "📍", path: "/serving-cities" },
];

const Services: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="sb-services">
      <div className="container">
        <div className="sb-services-row">
          {services.map((service, index) => (
            <div
              key={index}
              className="sb-fk-card"
              onClick={() => navigate(service.path)}
            >
              <div className="sb-fk-icon">{service.icon}</div>
              <div className="sb-fk-text">{service.title}</div>
            </div>
          ))}

          {/* See More */}
          <div
            className="sb-fk-card sb-see-more"
            onClick={() => navigate("/serving-cities")}
          >
            <div className="sb-fk-icon">➕</div>
            <div className="sb-fk-text">See More</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
