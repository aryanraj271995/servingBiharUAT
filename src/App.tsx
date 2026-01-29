import { Routes, Route } from "react-router-dom";
<<<<<<< HEAD

import Layout from "./Layout/Layout";

import Home from "./pages/Home";
import ServingCities from "./pages/ServingCities";
import ExploreBihar from "./pages/ExploreBihar";
import BhaiyaGPT from "./pages/BhaiyaGPT";

import LocalServices from "./pages/LocalServices";

import Medical from "./pages/Medical";
import Emergency from "./pages/Emergency";
import LocalServicesHub from "./pages/LocalServicesHub";
import CabBooking from "./pages/CabBooking";
import Hotels from "./pages/Hotels";
import Restaurants from "./pages/Restaurants";
import Education from "./pages/Education";

import GlobalServicesBar from "./components/GlobalServicesBar";




const App = () => {
  return (
    <Routes>
      {/* GLOBAL LAYOUT */}
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/GlobalServicesBar" element={<GlobalServicesBar />} />
        <Route path="/serving-cities" element={<ServingCities />} />
        <Route path="/explore-bihar" element={<ExploreBihar />} />
        <Route path="/BhaiyaGPT" element={<BhaiyaGPT />} />
        <Route path="/" element={<Home />} />
        <Route path="/serving-cities" element={<ServingCities />} />
        <Route path="/:city/:category" element={<LocalServices />} />
        <Route path="/medical" element={<Medical />} />
        <Route path="/emergency" element={<Emergency />} />
        <Route path="/local-services" element={<LocalServicesHub />} />
        <Route path="/cab-booking" element={<CabBooking />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/restaurants" element={<Restaurants />} />
        <Route path="/education" element={<Education />} />
      </Route>
    </Routes>
  );
};
=======
import MobileLayout from "./app/layout/MobileLayout";
import Home from "./app/pages/Home";
import ServiceDetail from "./app/pages/ServiceDetail";
import Profile from "./app/pages/Profile";

function App() {
  return (
    <Routes>
      <Route element={<MobileLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/services/:type" element={<ServiceDetail />} />
        <Route path="/profile" element={<Profile />} />
      </Route>
    </Routes>
  );
}
>>>>>>> a4737ce5e201ca99615b433386664555cc97d040

export default App;
