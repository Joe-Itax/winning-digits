import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Navigate } from "react-router-dom";

import Layout from "./components/layout/layout";
import Home from "./pages/home";
import Login from "./pages/login";
import Result from "./pages/result";

import "./App.css";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Navigate replace to="/login" />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/result",
        element: <Result />,
      },
    ],
  },
]);
export default function App() {
  return <RouterProvider router={routes} />;
}
