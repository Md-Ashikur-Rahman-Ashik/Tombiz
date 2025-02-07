import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SecondaryNavbar from "../components/SecondaryNavbar";

const Main = () => {
  const location = useLocation();

  // Check if the current route is homepage or not
  const isHomePage = location.pathname === "/";

  // The route name will be different based on path
  let routeName;

  if (location.pathname === "/about-us") {
    routeName = "About Us";
  }

  if (location.pathname === "/faq") {
    routeName = "FAQ";
  }

  if (location.pathname === "/services") {
    routeName = "Services";
  }

  if (location.pathname === "/service-details") {
    routeName = "Service Details";
  }

  if (location.pathname === "/blog") {
    routeName = "Blog";
  }

  if (location.pathname === "/blog-details") {
    routeName = "Blog Details";
  }

  return (
    <>
      {isHomePage ? <Navbar /> : <SecondaryNavbar routeName={routeName} />}
      <Outlet />
      <Footer />
    </>
  );
};

export default Main;
