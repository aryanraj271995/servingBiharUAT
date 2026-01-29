import "./FeatureGrid.css";

type Feature = {
  title: string;
  desc: string;
  icon: string;
};

const features: Feature[] = [
  {
    title: "Verified Services",
    desc: "Trusted local providers",
    icon: "✅",
  },
  {
    title: "Fast Support",
    desc: "Quick response guaranteed",
    icon: "⚡",
  },
  {
    title: "Affordable Pricing",
    desc: "Best rates in your city",
    icon: "💰",
  },
  {
    title: "Wide Coverage",
    desc: "Services across Bihar",
    icon: "📍",
  },
];

const FeatureGrid = () => {
  return (
    <section className="fg-section">
      <div className="fg-container">
        {/* LEFT SIDE – 4 CARDS */}
        <div className="fg-left">
          {features.map((item, index) => (
            <div className="fg-card" key={index}>
              <div className="fg-icon">{item.icon}</div>
              <h4 className="fg-title">{item.title}</h4>
              <p className="fg-desc">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* RIGHT SIDE – ADVERTISEMENT CARD */}
        <div className="fg-right">
          <div className="fg-ad">
            <h3>Advertisement</h3>
            <p>
              Your ad can appear here.<br />
              Reach users across Bihar.
            </p>
            <button>Advertise With Us</button>

            {/* Future use:
                - image banner
                - Google Ads iframe
                - Sponsored content
            */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;
