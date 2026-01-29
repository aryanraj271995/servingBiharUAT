import "./Footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="sb-footer">
      <div className="sb-footer-container">
        {/* BRAND */}
        <div className="sb-footer-col">
          <h3 className="sb-footer-logo">
            Serving<span>Bihar</span>
          </h3>
          <p>
            Bihar ke har shehar ke liye trusted local services, businesses aur
            professionals – ek hi platform par.
          </p>
        </div>

        {/* SERVICES */}
        <div className="sb-footer-col">
          <h4>Popular Services</h4>
          <ul>
            <li><Link to="/services/doctors">Doctors</Link></li>
            <li><Link to="/services/electrician">Electrician</Link></li>
            <li><Link to="/services/plumber">Plumber</Link></li>
            <li><Link to="/services/cab">Cab Booking</Link></li>
            <li><Link to="/services/repair">Repair Services</Link></li>
          </ul>
        </div>

        {/* CITIES */}
        <div className="sb-footer-col">
          <h4>Top Cities</h4>
          <ul>
            <li><Link to="/bihar/patna">Patna</Link></li>
            <li><Link to="/bihar/gaya">Gaya</Link></li>
            <li><Link to="/bihar/muzaffarpur">Muzaffarpur</Link></li>
            <li><Link to="/bihar/bhagalpur">Bhagalpur</Link></li>
            <li><Link to="/bihar/darbhanga">Darbhanga</Link></li>
          </ul>
        </div>

        {/* SUPPORT */}
        <div className="sb-footer-col">
          <h4>Support</h4>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/privacy">Privacy Policy</Link></li>
            <li><Link to="/terms">Terms & Conditions</Link></li>
            <li><Link to="/support">24/7 Support</Link></li>
          </ul>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="sb-footer-bottom">
        © {new Date().getFullYear()} Serving Bihar. All rights reserved.
      </div>
    </footer>
  );
}
