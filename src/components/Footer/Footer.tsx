import "./footer.css";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="sb-footer">
      <div className="sb-footer-container">
        
        {/* Brand */}
        <div className="sb-footer-col">
          <h3>Serving Bihar</h3>
          <p>
            A unified digital platform connecting Bihar’s cities,
            services, culture, and opportunities.
          </p>
        </div>

        {/* Quick Links */}
        <div className="sb-footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/explore-bihar">Explore Bihar</NavLink></li>
            <li><NavLink to="/serving-cities">Serving Cities</NavLink></li>
            <li><NavLink to="/services">Local Services</NavLink></li>
          </ul>
        </div>

        {/* Categories */}
        <div className="sb-footer-col">
          <h4>Popular Categories</h4>
          <ul>
            <li>Education</li>
            <li>Healthcare</li>
            <li>Tourism</li>
            <li>Restaurants</li>
            <li>Transport</li>
          </ul>
        </div>

        {/* Legal */}
        <div className="sb-footer-col">
          <h4>Information</h4>
          <ul>
            <li>About Us</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Disclaimer</li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="sb-footer-bottom">
        © {new Date().getFullYear()} Serving Bihar. Built for Bihar.
      </div>
    </footer>
  );
};

export default Footer;
