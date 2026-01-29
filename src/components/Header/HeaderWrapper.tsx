import Header from "./Header";
import MobileHeader from "./MobileHeader";

const HeaderWrapper: React.FC = () => {
  return (
    <>
      <div className="sb-desktop-only">
        <Header />
      </div>

      <div className="sb-mobile-only">
        <MobileHeader />
      </div>
    </>
  );
};

export default HeaderWrapper;
