import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import {Navbar} from "./components/navbar/Navbar.jsx";
import Login from "./components/login/Login.jsx";
import SignupUser from "./components/signup/SignupUser.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
import { PrivetRoute } from "./components/allRoutes/PrivateRoute.jsx";

let AppLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: (
          <PrivetRoute>
            <App />
          </PrivetRoute>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignupUser />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
