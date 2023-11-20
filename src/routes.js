import { createBrowserRouter } from "react-router-dom";
import Login from "./components/pages/login/Login";
import SearchPage from "./components/pages/searchPage/SearchPage";
import AdminDashBoard from "./components/pages/AdminDashBoard/AdminDashBoard";
import { RootLayout } from "./root";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/Login", element: <Login /> },
      { path: "/Search", element: <SearchPage /> },
      { path: "/DashBoard", element: <AdminDashBoard /> },
    ],
  },
]);
