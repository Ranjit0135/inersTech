import { Route, Routes } from "react-router-dom";
import MainLayout from "../layout/MainLayout.tsx";
import About from "../pages/about/About";
import Loading from "../components/Loading";
import SignUp from "../pages/auth/SignUp";
import SignIn from "../pages/auth/SignIn";
import Home from "../pages/home/Home";
import Footer from "../components/global_components/Footer.tsx";
import Services from "../section/_home/Services.tsx";
import Products from "../pages/products/Products.tsx";
import Contact from "../pages/auth/Contact.tsx";

const CustomRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />

          <Route path="/aboutUs" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contactUs" element={<Contact />} />

          <Route path="/footer" element={<Footer />} />

          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
        </Route>
        <Route path="/loading" element={<Loading />} />
      </Routes>
    </div>
  );
};

export default CustomRoutes;
