import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { fetchNews, setDebouncedTerm } from "./store/slices/newsSlice";
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
  const { i18n } = useTranslation();
  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => state.news.searchTerm);

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(setDebouncedTerm(searchTerm));
    }, 500);

    return () => clearTimeout(timer);
  }, [searchTerm, dispatch]);

  useEffect(() => {
    const promise = dispatch(fetchNews(i18n.language));
    return () => promise.abort();
  }, [i18n.language, dispatch]);

  return <RouterProvider router={router} />;
};

export default App;
