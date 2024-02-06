import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";
import { userdata } from "./utils/DefaultUserData";

const root = ReactDOM.createRoot(document.getElementById("root"));

// Check if userdata is not present in local storage before setting it
if (!localStorage.getItem("userdata")) {
  localStorage.setItem("userdata", JSON.stringify(userdata));
}

function updateLocalStorage(newUserData) {
  localStorage.setItem("userdata", JSON.stringify(newUserData));
}

root.render(
  <React.StrictMode>
    <App userdata={userdata} updateLocalStorage={updateLocalStorage} />
  </React.StrictMode>
);
