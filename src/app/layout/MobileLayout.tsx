import { Outlet } from "react-router-dom";
import BottomTabs from "../navigation/BottomTabs";
import "../../styles/mobile.css";

export default function MobileLayout() {
  return (
    <div className="mobile-container">
      <Outlet />
      <BottomTabs />
    </div>
  );
}
