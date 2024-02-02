import "../App.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Preview from "./Preview";
import Admin from "./Admin";
import Navbar from "./Navbar";
import { Suspense, useRef, useState } from "react";
import LoginModal from "./Modal";

function App() {
  const printRef = useRef(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const AppLayout = () => <Navbar children={<Outlet printRef={printRef} />} />;
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <div div>Error 404!</div>,
      children: [
        {
          path: "/",
          element: (
            <Suspense>
              <Preview printRef={printRef} />
            </Suspense>
          ),
        },
        {
          path: "/admin",
          element: isLoggedIn ? (
            <Suspense>
              <Admin />
            </Suspense>
          ) : (
            <>
              <LoginModal open={!isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
            </>
          ),
        },
      ],
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
