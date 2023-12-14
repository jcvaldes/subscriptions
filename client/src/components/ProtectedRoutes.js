import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../context";

const ProtectedRoutes = () => {
  // https://www.robinwieruch.de/react-router-private-routes/
  // https://stackoverflow.com/questions/62384395/protected-route-with-react-router-v6

  const [state, setState] = useContext(UserContext);

  return !!state.user ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
