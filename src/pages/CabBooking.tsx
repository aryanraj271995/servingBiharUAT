import "./CabBooking.css";
import cabImg from "../assets/cab.png";
import scooterImg from "../assets/bikeTaxi.png";
import autoImg from "../assets/auto.png";
import erickshawImg from "../assets/erickshaw.png";
import { useLocationContext } from "../context/LocationContext";
import { useState } from "react";

const vehicles = [
  { id: "cab", img: cabImg },
  { id: "scooter", img: scooterImg },
  { id: "auto", img: autoImg },
  { id: "erickshaw", img: erickshawImg },
];

const CabBooking = () => {
  const { city } = useLocationContext();

  // ✅ selected vehicle state
  const [activeVehicle, setActiveVehicle] = useState(vehicles[0]);

  return (
    <div className="cab-bg">
      <div className="cab-container">
        {/* LEFT */}
        <div className="cab-form-section">
          <h2>
            Online Cab Booking in <span>{city || "Your City"}</span>
          </h2>

          <div className="cab-tabs">
            <button>General</button>
            <button className="active">Business</button>
            <button>VIP</button>
          </div>

          <div className="cab-form">
            <input placeholder="Name" />
            <input placeholder="Contact number" />
            <input placeholder="Pickup point" />
            <input placeholder="Drop-off point" />
            <input placeholder="Cab type" />
            <input placeholder="Time & date" />

            <label className="cab-checkbox">
              <input type="checkbox" /> I agree about terms and conditions
            </label>

            <button className="cab-book-btn">BOOK NOW</button>
          </div>
        </div>

        {/* RIGHT */}
        <div className="cab-image-section">
          {/* MAIN IMAGE */}
          <div className="cab-yellow-panel">
            <img
              src={activeVehicle.img}
              alt="Selected Vehicle"
              className="cab-main-vehicle"
            />
          </div>

          {/* SCROLLABLE VEHICLE LIST */}
          <div className="cab-vehicle-strip">
            {vehicles.map((v) => (
              <img
                key={v.id}
                src={v.img}
                className={
                  activeVehicle.id === v.id ? "active" : ""
                }
                onClick={() => setActiveVehicle(v)}
                alt={v.id}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CabBooking;
