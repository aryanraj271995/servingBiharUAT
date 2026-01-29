import { useNavigate } from "react-router-dom";
import "./PriorityServices.css";

export default function PriorityServices({
  onClose,
}: {
  onClose: () => void;
}) {
  const navigate = useNavigate();

  const goToService = (type: string) => {
    onClose();                 // modal band
    navigate(`/services/${type}`);
  };

  return (
    <div className="ps-wrapper">
      <div className="ps-container">
        <div className="ps-top">
          <h4>Quick Access</h4>
          <button onClick={onClose}>✕</button>
        </div>

        <div className="ps-scroll">
          <div
            className="service-box medical"
            onClick={() => goToService("medical")}
          >
            <h3>Medical</h3>
            <p>Doctors, Clinics, Ambulance</p>
          </div>

          <div
            className="service-box quick"
            onClick={() => goToService("quick-service")}
          >
            <h3>Quick Service</h3>
            <p>Electrician, Plumber, Water</p>
          </div>

          <div
            className="service-box cab"
            onClick={() => goToService("cab")}
          >
            <h3>Cab Service</h3>
            <p>Taxi, Auto, Bike</p>
          </div>

          <div
            className="service-box emergency"
            onClick={() => goToService("emergency")}
          >
            <h3>Emergency Support</h3>
            <p>Police, Fire, SOS</p>
          </div>
        </div>
      </div>
    </div>
  );
}
