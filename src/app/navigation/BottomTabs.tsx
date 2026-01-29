import { useNavigate, useLocation } from "react-router-dom";
import "./BottomTabs.css";

export default function BottomTabs() {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="bottom-tabs">
      <div
        className={`tab-item ${isActive("/") ? "active" : ""}`}
        onClick={() => navigate("/")}
      >
        <span>🏠</span>
        <p>Home</p>
      </div>

      <div
        className={`tab-item ${isActive("/services") ? "active" : ""}`}
        onClick={() => navigate("/services/medical")}
      >
        <span>🛠️</span>
        <p>Services</p>
      </div>

      <div
        className={`tab-item ${isActive("/profile") ? "active" : ""}`}
        onClick={() => navigate("/profile")}
      >
        <span>👤</span>
        <p>Profile</p>
      </div>
    </nav>
  );
}
