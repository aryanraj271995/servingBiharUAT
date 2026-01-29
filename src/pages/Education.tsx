import { useLocation } from "../context/LocationContext";
import "./Education.css";

const educationCards = [
  { title: "Schools", icon: "🏫", desc: "Primary & secondary schools" },
  { title: "Colleges", icon: "🎓", desc: "Degree & professional colleges" },
  { title: "Coaching Institutes", icon: "📚", desc: "Exam preparation centers" },
  { title: "Computer Training", icon: "💻", desc: "IT & skill courses" },
  { title: "Libraries", icon: "📖", desc: "Study & reading spaces" },
];

const Education = () => {
  const { city } = useLocation();

  return (
    <main className="edu-page">
      <h1 className="edu-title">
        Education in <span>{city || "Your City"}</span>
      </h1>

      <div className="edu-grid">
        {educationCards.map((e, i) => (
          <div key={i} className="edu-card">
            <div className="edu-icon">{e.icon}</div>
            <h3>{e.title}</h3>
            <p>{e.desc}</p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Education;
