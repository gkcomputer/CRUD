import { Outlet } from "react-router-dom";
import Header from "./components/header/Header";

export const RootLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Outlet />
    </>
  );
};
