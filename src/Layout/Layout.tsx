import HeaderWrapper from "../components/Header/HeaderWrapper";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <HeaderWrapper />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
