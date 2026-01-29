import { useState } from "react";
import Header from "../components/Header";
import PriorityServices from "../components/PriorityServices";
import HeroSlider from "../components/HeroSlider";
import MobileCategoryGrid from "../components/MobileCategoryGrid";

export default function Home() {
  const [open, setOpen] = useState(true);

  return (
    <>
      {open && <PriorityServices onClose={() => setOpen(false)} />}

      <Header />
      <HeroSlider />
      <MobileCategoryGrid />
      <div style={{ padding: "16px 16px 96px" }}>
        {/* home content */}
      </div>
    </>
  );
}
