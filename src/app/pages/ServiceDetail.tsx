import { useLocation, useParams } from "react-router-dom";

interface LocationState {
  city?: string;
}

export default function ServiceDetails() {
  const { category } = useParams();
  const location = useLocation();

  const state = location.state as LocationState | null;
  const city = state?.city || localStorage.getItem("city") || "Patna";

  return (
    <section style={{ padding: "16px" }}>
      <h2>
        {category} services in {city}
      </h2>

      {/* yahin se tum API call / cards render karoge */}
    </section>
  );
}
