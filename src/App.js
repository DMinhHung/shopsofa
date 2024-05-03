import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

// Import các CSS và JS cần thiết
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/assets/user/css/style.css";
import "../src/assets/user/css/tiny-slider.css";
import "../src/assets/user/css/product-detail.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// Import các trang (pages)
// User
import Index from "./container/user/Index";
import Shop from "./container/user/Shop";
import ProductDetail from "./container/user/ProductDetail";
import About from "./container/user/About";
import Services from "./container/user/Services";
import Blog from "./container/user/Blog";
import Contact from "./container/user/Contact";
import ShoppingCart from "./container/user/ShoppingCart";
import Checkout from "./container/user/Checkout";
import Thankyou from "./container/user/Thankyou";
import NotFoundPage from "./container/user/404";

// Admin
import Dashboard from "./container/admin/Dashboard";
import Product from "./container/admin/Product";
import User from "./container/admin/User";
import BlogAd from "./container/admin/Blog";
import OurTeam from "./container/admin/OurTeam";
import Order from "./container/admin/Order";

// Login
import Login from "./container/user/login/Login";
import Register from "./container/user/login/Register";
import Profile from "./container/user/auth/Profile";

const initialOptions = {
  "client-id":
    "AXF1yspt3WBEN5ijpODGsR_r4li-QyAaUwuCooP8InZL3fEvENZgDp6gAt1FdPnvcudKY37THU6LGa27",
  currency: "USD",
  intent: "capture",
};

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/admin/dashboard" element={<Dashboard />} />
      <Route path="/admin/product" element={<Product />} />
      <Route path="/admin/user" element={<User />} />
      <Route path="/admin/blogad" element={<BlogAd />} />
      <Route path="/admin/ourteam" element={<OurTeam />} />
      <Route path="/admin/order" element={<Order />} />
    </Routes>
  );
};

const UserRoutes = () => {
  const userRole = localStorage.getItem("userrole");
  console.log("userRole:", userRole);
  return (
    <Routes>
      {/* Các Routes dành cho người dùng */}
      <Route path="/" element={<Index />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/product-details/:id" element={<ProductDetail />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/shoppingcart" element={<ShoppingCart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/thanks" element={<Thankyou />} />
      {/* Routes đăng nhập */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      {/* Routes cho hồ sơ người dùng */}
      <Route path="/profile" element={<Profile />} />
      {/* Routes không tìm thấy */}
      {userRole !== "admin" && <Route path="*" element={<NotFoundPage />} />}
    </Routes>
  );
};

const App = () => {
  const userRole = localStorage.getItem("userrole");
  console.log("userRole:", userRole);
  return (
    <Router>
      <PayPalScriptProvider options={initialOptions}>
        {/* Kiểm tra vai trò của người dùng */}
        {userRole === "admin" ? (
          <>
            <UserRoutes />
            <AdminRoutes />
          </>
        ) : (
          <UserRoutes />
        )}
      </PayPalScriptProvider>
    </Router>
  );
};

export default App;
