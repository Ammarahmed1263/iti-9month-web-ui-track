import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

function ProtectedLayout() {
  const { userEmail } = useAuthContext();

  if (!userEmail) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}

export default ProtectedLayout;
