import { useEffect, useState } from "react";

interface LocationState {
  city: string;
  loading: boolean;
  error: string | null;
}

export const useLocation = (): LocationState => {
  const [city, setCity] = useState("Detecting...");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!navigator.geolocation) {
      setError("Geolocation not supported");
      setCity("Select location");
      setLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const { latitude, longitude } = position.coords;

          // Reverse geocode (OpenStreetMap – FREE)
          const res = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
          );
          const data = await res.json();

          const detectedCity =
            data.address.city ||
            data.address.town ||
            data.address.state_district ||
            "Bihar";

          setCity(detectedCity);
        } catch {
          setCity("Select location");
        } finally {
          setLoading(false);
        }
      },
      () => {
        setError("Permission denied");
        setCity("Select location");
        setLoading(false);
      }
    );
  }, []);

  return { city, loading, error };
};
