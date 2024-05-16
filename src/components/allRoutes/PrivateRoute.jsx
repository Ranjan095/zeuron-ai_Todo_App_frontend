/** @format */

import { Navigate } from "react-router";

export const PrivetRoute = ({ children }) => {
  let isAuth = true;

  // console.log(location)
  return isAuth ? children : <Navigate to="/login" />;
};
