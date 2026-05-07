import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

function AuthLayout() {
  const { userEmail } = useAuthContext();

  if (userEmail) {
    return <Navigate to="/" replace />;
  }

  return (
    <main className="container">
      <Outlet />
    </main>
  );
}

export default AuthLayout;
