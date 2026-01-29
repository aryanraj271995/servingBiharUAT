import "./ExploreBihar.css";

const exploreCards = [
  {
    title: "Tourist Places",
    icon: "📸" ,
    desc: "Historical & religious destinations",
  },
  {
    title: "Culture & Heritage",
    icon: "🎭",
    desc: "Art, traditions & ancient legacy",
  },
  {
    title: "Festivals",
    icon: "🎉",
    desc: "Chhath, Sonepur Mela & more",
  },
  {
    title: "Food of Bihar",
    icon: "🍲",
    desc: "Litti Chokha & traditional cuisine",
  },
  {
    title: "Wildlife & Nature",
    icon: "🌿",
    desc: "Valmiki Tiger Reserve & landscapes",
  },
  {
    title: "Districts of Bihar",
    icon: "🗺️",
    desc: "Explore all districts & regions",
  },
];

const ExploreBihar = () => {
  return (
    <div className="explore-page">
      
      {/* HERO SECTION */}
      <section className="explore-hero">
        <h1>Explore Bihar</h1>
        <p>
          Discover the history, culture, heritage and hidden gems of Bihar
        </p>
      </section>

      {/* CARD GRID */}
      <section className="explore-grid">
        {exploreCards.map((item, index) => (
          <div className="explore-card" key={index}>
            <div className="icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </section>

      {/* INFO SECTION */}
      <section className="explore-info">
        <h2>Why Explore Bihar?</h2>
        <p>
          Bihar is one of the oldest inhabited regions in the world, rich in
          history, spirituality, learning and culture. From ancient universities
          to sacred rivers, Bihar holds a timeless legacy.
        </p>
      </section>

    </div>
  );
};

export default ExploreBihar;
