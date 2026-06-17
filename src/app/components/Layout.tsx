import { Outlet } from "react-router";
import { ScrollToTop } from "./ScrollToTop";
import { HomePageResetProvider } from "../contexts/HomePageResetContext";

export function Layout() {
  return (
    <HomePageResetProvider>
      <ScrollToTop />
      <Outlet />
    </HomePageResetProvider>
  );
}
