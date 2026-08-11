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
import AddProduct from "../pages/AddProduct";

import AdminDashboard from "../pages/AdminDashboard";
import AdminProtectedRoute from "../components/adminProtectedRoute";
import AdminLayout from "../Layout/adminLayouts";
import AdminProducts from "../pages/AdminProducts";
import AdminOrders from "../pages/AdminOrders";
import AdminOrderDetails from "../pages/AdminOrderDetails";
import AdminUsers from "../pages/AdminUsers";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* CUSTOMER ROUTES */}
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

        {/* PROTECTED ADMIN ROUTES */}
        <Route element={<AdminProtectedRoute />}>
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="dashboard" element={<AdminDashboard />} />

            <Route path="products" element={<AdminProducts />} />

            <Route path="products/add" element={<AddProduct />} />

            <Route path="orders" element={<AdminOrders />} />
            <Route path="orders/:id" element={<AdminOrderDetails />} />
            <Route path="users" element={<AdminUsers />} />
          </Route>
        </Route>

        {/* 404 */}
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
