import { useLocation } from "../../context/LocationContext";

export default function HeroSection() {
  const { city } = useLocation();

  return (
    <section>
      <h1>Services available in {city}</h1>
      <p>Top professionals near you</p>
    </section>
  );
}
