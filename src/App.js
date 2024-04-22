import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//Import CSS and JS
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/assets/user/css/style.css";
import "../src/assets/user/css/tiny-slider.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
//Import Pages
//User
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

import OurTeam from "./container/admin/OurTeam";
import Order from "./container/admin/Order";
//Admin
import Dashboard from "./container/admin/Dashboard";
import Product from "./container/admin/Product";
import User from "./container/admin/User";
import BlogAd from "./container/admin/Blog";
//Login
import Login from "./container/user/login/Login";
import Register from "./container/user/login/Register";

//Import CSS and JS
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/assets/user/css/style.css";
import "../src/assets/user/css/tiny-slider.css";
import "../src/assets/user/css/product-detail.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// import "../assets/js/custom.js";
// import "../assets/js/tiny-slider.js";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* User */}
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
          <Route path="*" element={<NotFoundPage />} />

          {/* Login */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* User */}

          {/* Admin */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/product" element={<Product />} />
          <Route path="/user" element={<User />} />
          <Route path="/blogad" element={<BlogAd />} />
          <Route path="/ourteam" element={<OurTeam />} />
          <Route path="/order" element={<Order />} />
          {/* Admin */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
