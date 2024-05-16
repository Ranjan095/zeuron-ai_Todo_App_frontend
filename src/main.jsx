import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Navbar } from "./components/navbar/Navbar.jsx";
import Login from "./components/login/Login.jsx";
import SignupUser from "./components/signup/SignupUser.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
import { PrivetRoute } from "./components/allRoutes/PrivateRoute.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivetRoute>
        <App />
      </PrivetRoute>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignupUser />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Navbar />
    <RouterProvider router={router} />
  </>
);
