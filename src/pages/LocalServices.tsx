import { useParams } from "react-router-dom";
import { cityData } from "../data/cityData";

const LocalServices = () => {
  const { city, category } = useParams();

  if (!city || !category) {
    return <p>Invalid page</p>;
  }

  const cityKey = city.toLowerCase();
  const categoryKey = category.toLowerCase();

  const list = cityData[cityKey]?.[categoryKey] || [];

  return (
    <main style={{ padding: "24px" }}>
      <h1>
        {category.replace(/-/g, " ")} in {city}
      </h1>

      {list.length === 0 ? (
        <p>No data available for this category.</p>
      ) : (
        <ul>
          {list.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </main>
  );
};

export default LocalServices;
