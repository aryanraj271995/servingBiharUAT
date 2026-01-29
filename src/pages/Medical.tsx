import "./Medical.css";
import doctorImg from "../assets/doctor.png";

import { useLocationContext } from "../context/LocationContext";

const medicalServices = [
  { icon: "📅", label: "Book Appointment", link: "/medical/appointments" },
  { icon: "👨‍⚕️", label: "Talk to Doctors", link: "/medical/doctors" },
  { icon: "🏥", label: "Hospitals & Clinics", link: "/medical/hospitals" },
  { icon: "🧪", label: "Lab Testing", link: "/medical/labs" },
  { icon: "💊", label: "Medicine & Supplies", link: "/medical/medicine" },
  { icon: "🏠", label: "Home Care", link: "/medical/home-care" },
];

const Medical = () => {
  const { city } = useLocationContext();

  return (
    <div className="medical-page">
      {/* HERO SECTION */}
      <section className="medical-hero">
        <div className="medical-hero-left">
          <span className="medical-rating">
            Medical Services in {city || "Bihar"}
          </span>

          <h1>
            Discover Health: <br />
            Find Your <span>Trusted Doctors</span> Today
          </h1>

          <div className="medical-search">
            <select>
              <option>Select Specialty</option>
              <option>Cardiology</option>
              <option>Orthopedic</option>
              <option>General Physician</option>
            </select>

            <input
              type="text"
              placeholder="Search hospitals, procedures"
            />
            <button>Search</button>
          </div>
        </div>

        <div className="medical-hero-right">
          <img src={doctorImg} alt="Doctor" />
        </div>
      </section>

      {/* QUICK SERVICES — ✅ UPDATED */}
      <section className="medical-services">
        {medicalServices.map((item, index) => (
          <a
            key={index}
            href={item.link}
            className="service-card"
          >
            <span>{item.icon}</span>
            <p>{item.label}</p>
          </a>
        ))}
      </section>
    </div>
  );
};

export default Medical;
