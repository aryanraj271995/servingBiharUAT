<<<<<<< HEAD
import React, { createContext, useContext, useEffect, useState } from "react";

type LocationState = {
  city: string;
  lat: number | null;
  lng: number | null;
  isAutoDetected: boolean;
  hasManualOverride: boolean;
  setManualCity: (city: string) => void;
};

const LocationContext = createContext<LocationState | null>(null);

export const LocationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // ✅ Restore city or fallback
  const [city, setCity] = useState<string>(
    localStorage.getItem("city") || "Patna"
  );

  const [lat, setLat] = useState<number | null>(null);
  const [lng, setLng] = useState<number | null>(null);

  // ✅ Flags
  const [isAutoDetected, setIsAutoDetected] = useState<boolean>(
    localStorage.getItem("manualCity") !== "true"
  );

  const [hasManualOverride, setHasManualOverride] = useState<boolean>(
    localStorage.getItem("manualCity") === "true"
  );

  // ✅ Manual city select (highest priority)
  const setManualCity = (manualCity: string) => {
    setCity(manualCity);
    setIsAutoDetected(false);
    setHasManualOverride(true);

    localStorage.setItem("city", manualCity);
    localStorage.setItem("manualCity", "true");
  };

  // ✅ Auto detect ONLY if manual override not done
  useEffect(() => {
    if (!navigator.geolocation || hasManualOverride) return;

    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const { latitude, longitude } = pos.coords;
        setLat(latitude);
        setLng(longitude);

        try {
          const res = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
          );
          const data = await res.json();

          const detectedCity =
            data?.address?.city ||
            data?.address?.town ||
            data?.address?.village;

          if (detectedCity) {
            setCity(detectedCity);
            setIsAutoDetected(true);

            localStorage.setItem("city", detectedCity);
            localStorage.removeItem("manualCity");
          }
        } catch (e) {
          console.warn("Reverse geocoding failed");
        }
      },
      () => {
        // Permission denied → fallback
        setIsAutoDetected(false);
      }
    );
  }, [hasManualOverride]);

  return (
    <LocationContext.Provider
      value={{
        city,
        lat,
        lng,
        isAutoDetected,
        hasManualOverride,
        setManualCity,
      }}
    >
=======
import { createContext, useContext, useState, useEffect } from "react";

type LocationContextType = {
  city: string;
  setCity: (city: string) => void;
};

const LocationContext = createContext<LocationContextType | null>(null);

export const LocationProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  // 🔹 city initialize from localStorage (single source of truth)
  const [city, setCityState] = useState<string>(() => {
    return localStorage.getItem("city") || "Patna";
  });

  // 🔹 wrapper function (IMPORTANT)
  const setCity = (newCity: string) => {
    setCityState(newCity);
    localStorage.setItem("city", newCity);
  };

  // 🔹 safety sync (optional but good)
  useEffect(() => {
    localStorage.setItem("city", city);
  }, [city]);

  return (
    <LocationContext.Provider value={{ city, setCity }}>
>>>>>>> a4737ce5e201ca99615b433386664555cc97d040
      {children}
    </LocationContext.Provider>
  );
};

export const useLocation = () => {
<<<<<<< HEAD
  const ctx = useContext(LocationContext);
  if (!ctx) {
    throw new Error("useLocation must be used inside LocationProvider");
  }
  return ctx;
};

// ✅ Alias export (NO logic change)
export const useLocationContext = useLocation;
=======
  const context = useContext(LocationContext);
  if (!context) {
    throw new Error("useLocation must be used inside LocationProvider");
  }
  return context;
};
>>>>>>> a4737ce5e201ca99615b433386664555cc97d040
