import "../App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Preview from "./Preview";
import Admin from "./Admin";
import { userdata } from "../utils/DefaultUserData";
import Navbar from "./Navbar";

function App() {
  localStorage.setItem("userdata", JSON.stringify(userdata));

  const isLoggedIn = () => {
    return true;
  };
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Preview />} />
          <Route path="/nav" element={<Navbar />} />

          <Route
            path="/admin"
            element={
              isLoggedIn() ? <Admin /> : <Navigate to="/" replace={true} />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
