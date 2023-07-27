import Home from "../pages/Home";
import EditUrl from "../pages/EditUrl";
import ListUrl from "../pages/ListUrl";
import Layout from "../layout/Layout";
import Register from "../pages/Register";
import SignIn from "../pages/SignIn";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/edit-url",
        element: <EditUrl />,
      },
      {
        path: "/list-url",
        element: <ListUrl />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/sign-in",
        element: <SignIn />,
      },
    ],
  },
]);

export default router;
