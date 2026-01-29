import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
<<<<<<< HEAD
import { LocationProvider } from "./context/LocationContext";
import "./styles/global.css";
=======
import "./index.css";
>>>>>>> a4737ce5e201ca99615b433386664555cc97d040

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
<<<<<<< HEAD
      <LocationProvider>
        <App />
      </LocationProvider>
=======
      <App />
>>>>>>> a4737ce5e201ca99615b433386664555cc97d040
    </BrowserRouter>
  </React.StrictMode>
);
