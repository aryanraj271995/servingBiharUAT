import { useLocation } from "../../context/LocationContext";
import { useEffect, useState } from "react";

export default function Services() {
  const { city } = useLocation();
  const [services, setServices] = useState<string[]>([]);

  useEffect(() => {
    // later API call
    fetch(`/api/services?city=${city}`)
      .then(res => res.json())
      .then(data => setServices(data));
  }, [city]);

  return (
    <div>
      <h3>Popular services in {city}</h3>
      {services.map(s => (
        <div key={s}>{s}</div>
      ))}
    </div>
  );
}
