import { useEffect } from "react";
import { useLocation } from "../context/LocationContext";

export const useHeaderLocationSync = () => {
  const { city, setManualCity } = useLocation();

  useEffect(() => {
    const inputs = document.querySelectorAll<HTMLInputElement>(
      ".sb-search input"
    );

    const locationInput = inputs[1]; // second input = Enter location

    if (!locationInput) return;

    // Auto-fill detected location
    if (city && locationInput.value === "") {
      locationInput.value = city;
    }

    // Manual override
    const handler = (e: Event) => {
      setManualCity((e.target as HTMLInputElement).value);
    };

    locationInput.addEventListener("change", handler);

    return () => {
      locationInput.removeEventListener("change", handler);
    };
  }, [city, setManualCity]);
};
