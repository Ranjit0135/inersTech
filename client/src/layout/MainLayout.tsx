import { Outlet } from "react-router-dom";
import Navbar from "../components/global_components/Navbar";
import Footer from "../components/global_components/Footer";
const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
