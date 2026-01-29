import "./ExploreCategory.css";
import {
  FaUtensils,
  FaHospital,
  FaSpa,
  FaGraduationCap,
  FaDumbbell,
  FaHotel,
  FaBuilding,
  FaLaptopCode,
  FaTshirt,
  FaTools,
  FaTaxi,
  FaHome,
} from "react-icons/fa";

import { useLocation } from "../../context/LocationContext";

const categories = [
  { title: "Restaurants", subtitle: "Food & Dining", icon: FaUtensils, color: "#ff7849" },
  { title: "Hospital & Clinic", subtitle: "Healthcare Services", icon: FaHospital, color: "#0ea5e9" },
  { title: "Beauty & Spa", subtitle: "Salon & Wellness", icon: FaSpa, color: "#ec4899" },
  { title: "Education", subtitle: "Schools & Coaching", icon: FaGraduationCap, color: "#22c55e" },
  { title: "Gym & Fitness", subtitle: "Health & Fitness", icon: FaDumbbell, color: "#f59e0b" },
  { title: "PG / Hostels", subtitle: "Accommodation", icon: FaHotel, color: "#6366f1" },
  { title: "Estate Agent", subtitle: "Property Services", icon: FaBuilding, color: "#6b7280" },
  { title: "IT Companies", subtitle: "Tech Services", icon: FaLaptopCode, color: "#0284c7" },
  { title: "Fashion", subtitle: "Clothing & Lifestyle", icon: FaTshirt, color: "#a855f7" },
  { title: "Repair & Services", subtitle: "Home & Utility", icon: FaTools, color: "#64748b" },

  // ✅ NEW CARDS
  { title: "Cab & Transport", subtitle: "Local & Outstation", icon: FaTaxi, color: "#2563eb" },
  { title: "Home Services", subtitle: "Cleaning & Maintenance", icon: FaHome, color: "#16a34a" },
];

export default function ExploreCategory() {
  const { city } = useLocation();

  return (
    <section className="ec-section">
      <div className="ec-header">
        <h2>
          Explore <span>{city}</span>
        </h2>
        <p>
          Find services and businesses available in <strong>{city}</strong>
        </p>
      </div>

      <div className="ec-grid">
        {categories.map((cat, index) => {
          const Icon = cat.icon;
          return (
            <div key={index} className="ec-card">
              <div className="ec-icon" style={{ backgroundColor: cat.color }}>
                <Icon />
              </div>
              <h3>{cat.title}</h3>
              <p>{cat.subtitle}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
