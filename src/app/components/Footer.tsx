import { useNavigate, useLocation } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <footer className="sb-footer">
      <div
        className={`sb-footer-item ${isActive("/") ? "active" : ""}`}
        onClick={() => navigate("/")}
      >
        <span>🏠</span>
        <p>Home</p>
      </div>

      <div
        className={`sb-footer-item ${
          location.pathname.startsWith("/services") ? "active" : ""
        }`}
        onClick={() => navigate("/services/medical")}
      >
        <span>🛠️</span>
        <p>Services</p>
      </div>

      <div
        className={`sb-footer-item ${isActive("/profile") ? "active" : ""}`}
        onClick={() => navigate("/profile")}
      >
        <span>👤</span>
        <p>Profile</p>
      </div>
    </footer>
  );
}
