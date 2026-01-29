import { useEffect, useState } from "react";
import "./HeroSlider.css";

const banners = [
  {
    title: "Medical Services",
    subtitle: "Doctors, Clinics, Ambulance",
    image:
      "https://images.unsplash.com/photo-1580281657521-6c4a02a3f91b?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Quick City Services",
    subtitle: "Electrician, Plumber, Cleaning",
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Cab & Transport",
    subtitle: "Taxi, Auto, Bike",
    image:
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Emergency Support",
    subtitle: "Police, Fire, SOS",
    image:
      "https://images.unsplash.com/photo-1603398938378-e54f41e3d43f?auto=format&fit=crop&w=900&q=80",
  },
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % banners.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero-slider">
      <div
        className="hero-track"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {banners.map((item, i) => (
          <div
            key={i}
            className="hero-slide"
            style={{ backgroundImage: `url(${item.image})` }}
          >
            <div className="hero-overlay" />
            <div className="hero-content">
              <h3>{item.title}</h3>
              <p>{item.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
