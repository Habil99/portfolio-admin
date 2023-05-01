import { createBrowserRouter } from "react-router-dom";
import { AuthLayout, Login, Register } from "modules/auth";
import { Dashboard } from "modules/dashboard";
import { NotFound } from "components";
import AuthGuard from "./guards/AuthGuard";
import BannerList from "modules/banner/components/BannerList";
import { AboutModule } from "../modules/about";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <AuthGuard><Dashboard /></AuthGuard>,
    children: [
      {
        path: "/portfolio/banner",
        element: <BannerList />,
      },
      {
        path: "/portfolio/about",
        element: <AboutModule />,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthGuard isAuthPage><AuthLayout /></AuthGuard>,
    children: [
      {
        path: "/auth/login",
        element: <Login />,
      },
      {
        path: "/auth/register",
        element: <Register />,
      },
    ],
  },
  // catch all 404
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default routes;
