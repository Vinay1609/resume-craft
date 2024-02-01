import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";
import reportWebVitals from "./reportWebVitals";
import { userdata } from "./utils/DefaultUserData";

const root = ReactDOM.createRoot(document.getElementById("root"));
localStorage.setItem("userdata", JSON.stringify(userdata));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
reportWebVitals();
