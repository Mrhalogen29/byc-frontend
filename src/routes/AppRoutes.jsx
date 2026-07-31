import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "../Layout/MainLayout";

import Home from "../pages/Home";
import About from "../pages/About";
import Blog from "../pages/Blogs";
import AddToCart from "../pages/AddToCart";
import Carts from "../pages/Carts";
import Login from "../pages/Login";
import Contact from "../pages/Contact";
import AllProduct from "../pages/AllProduct";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="blog" element={<Blog />} />
          <Route path="addToCart" element={<AddToCart />} />
          <Route path="cart" element={<Carts />} />
          <Route path="login" element={<Login />} />
          <Route path="contact" element={<Contact />} />
          <Route path="AllProduct" element={<AllProduct />} />
        </Route>

        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
