/** @format */

import { useSelector } from "react-redux";
import { Navigate } from "react-router";

export const PrivetRoute = ({ children }) => {
  let { isAuth } = useSelector((store) => store.authReducer);

  // console.log(isAuth);
  return isAuth ? children : <Navigate to="/login" />;
};
