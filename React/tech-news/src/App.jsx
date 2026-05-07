import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthLayout from "./layouts/AuthLayout";
import MainLayout from "./layouts/MainLayout";
import ProtectedLayout from "./layouts/ProtectedLayout";
import CreateArticle from "./pages/CreateArticle";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NewsDetails from "./pages/NewsDetails";
import Register from "./pages/Register";

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/news/:id",
        element: <NewsDetails />,
      },
      {
        element: <ProtectedLayout />,
        children: [
          {
            path: "/create-article",
            element: <CreateArticle />,
          },
        ],
      },
    ],
  },
  {
    element: <AuthLayout />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
