import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, condition, redirect }) => {
  return <>{condition ? children : <Navigate to={redirect} />}</>;
};

export default ProtectedRoute;
