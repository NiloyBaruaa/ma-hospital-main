// src/Routes/PrivateRoute.jsx
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({ children }) => {
  const isAdmin = localStorage.getItem("admin") === "true"; // Or check from auth context

  return isAdmin ? children : <Navigate to="/" />;
};

export default PrivateRoute;
