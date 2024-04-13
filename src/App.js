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
import About from "./container/user/About";
import Services from "./container/user/Services";
import Blog from "./container/user/Blog";
import Contact from "./container/user/Contact";
//Admin
import Dashboard from "./container/admin/Dashboard";
import Product from "./container/admin/Product";
import AddProduct from "./container/admin/CRUD/AddProduct";
import User from "./container/admin/User";
import Employee from "./container/admin/Employee";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* User */}
          <Route path="/" element={<Index />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          {/* User */}
          {/* Admin */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/product" element={<Product />} />
          <Route path="/addproduct" element={<AddProduct />} />
          <Route path="/user" element={<User />} />
          <Route path="/employee" element={<Employee />} />

          {/* Admin */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
