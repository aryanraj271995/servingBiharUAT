import { useEffect, useState } from "react";
import "./hero.css";

/* SAME IMAGE, DIFFERENT VARIABLE NAMES */
import skylineImg from "../../assets/bihar-background.png";
import skylineImg1 from "../../assets/Medical Services.png";
import skylineImg2 from "../../assets/Emergency Support.png";
import skylineImg3 from "../../assets/local services.png";
import skylineImg4 from "../../assets/cab services.png";
import skylineImg5 from "../../assets/Hotel.png";
import skylineImg6 from "../../assets/restaurants.png";
import skylineImg7 from "../../assets/education.png";
import skylineImg8 from "../../assets/saloon.png";
import skylineImg9 from "../../assets/gym.png";

const slides = [
  skylineImg,
  skylineImg1,
  skylineImg2,
  skylineImg3,
  skylineImg4,
  skylineImg5,
  skylineImg6,
  skylineImg7,
  skylineImg8,
  skylineImg9,
];

const Hero: React.FC = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
  const timer = setInterval(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, 4000);

  return () => clearInterval(timer);
}, [slides.length]);


  return (
    <section className="sb-hero">
      <div className="sb-hero-container">
        <div
          className="sb-hero-slider"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides.map((img, index) => (
            <div className="sb-hero-slide" key={index}>
              <img src={img} alt={`Hero Slide ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
