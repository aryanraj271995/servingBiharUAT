import { useEffect, useState } from "react";
import "./HeroBanner.css";

const slides = [
  {
    title: "Medical Services",
    subtitle: "Doctors, Clinics, Labs",
    cta: "Find Doctors",
    image: "https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg",
  },
  {
    title: "Wedding & Event Services",
    subtitle: "Banquet, Caterers, Decorators",
    cta: "Explore Vendors",
    image: "https://images.pexels.com/photos/3835638/pexels-photo-3835638.jpeg",
  },
  {
    title: "Lowest Airfares",
    subtitle: "Book flights at best prices",
    cta: "Book Now",
    image: "https://images.unsplash.com/photo-1529070538774-1843cb3265df",
  },
];

export default function HeroBanner() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="sb-hero">
      <div className="sb-hero-container">
        {/* LEFT SLIDER */}
        <div
          className="sb-hero-slider"
          style={{ backgroundImage: `url(${slides[index].image})` }}
        >
          <div className="sb-hero-overlay" />

          <div className="sb-hero-content">
            <h1>{slides[index].title}</h1>
            <p>{slides[index].subtitle}</p>
            <button>{slides[index].cta}</button>
          </div>

          {/* DOTS */}
          <div className="sb-dots">
            {slides.map((_, i) => (
              <span
                key={i}
                className={i === index ? "active" : ""}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>
        </div>

        {/* RIGHT CARDS */}
        <div className="sb-hero-cards">
          <div className="sb-card blue">
            <h4>B2B</h4>
            <p>Quick Quotes</p>
          </div>
          <div className="sb-card navy">
            <h4>Repairs</h4>
            <p>Nearest Vendors</p>
          </div>
          <div className="sb-card purple">
            <h4>Real Estate</h4>
            <p>Trusted Agents</p>
          </div>
          <div className="sb-card green">
            <h4>Doctors</h4>
            <p>Book Appointments</p>
          </div>
        </div>
      </div>
    </section>
  );
}
