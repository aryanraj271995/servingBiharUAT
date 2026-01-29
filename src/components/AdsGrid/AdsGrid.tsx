import "./AdsGrid.css";

type AdCard = {
  title: string;
  desc: string;
  icon: string;
};

const ads: AdCard[] = [
  {
    title: "Advertise Here",
    desc: "Promote your service",
    icon: "📢",
  },
  {
    title: "Sponsored Slot",
    desc: "Reach local customers",
    icon: "🎯",
  },
  {
    title: "Business Promotion",
    desc: "Grow your brand in Bihar",
    icon: "🏷️",
  },
  {
    title: "Featured Ad",
    desc: "High visibility placement",
    icon: "⭐",
  },
];

const AdsGrid = () => {
  return (
    <section className="ag-section">
      <div className="ag-container">
        {/* LEFT SIDE – 4 AD CARDS */}
        <div className="ag-left">
          {ads.map((item, index) => (
            <div className="ag-card" key={index}>
              <div className="ag-icon">{item.icon}</div>
              <h4 className="ag-title">{item.title}</h4>
              <p className="ag-desc">{item.desc}</p>
              <span className="ag-badge">Ad Space</span>
            </div>
          ))}
        </div>

        {/* RIGHT SIDE – BIG AD */}
        <div className="ag-right">
          <div className="ag-ad">
            <h3>Advertisement</h3>
            <p>
              This is a premium ad space.<br />
              Banner / Video / Google Ads can be placed here.
            </p>
            <button>Book This Ad</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdsGrid;
