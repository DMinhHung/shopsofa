import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./container/user/Index";
import Shop from "./container/user/Shop";
import About from "./container/user/About";
import Services from "./container/user/Services";
import Blog from "./container/user/Blog";
import Contact from "./container/user/Contact";

//Import CSS and JS
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/assets/css/style.css";
import "../src/assets/css/tiny-slider.css";

import "bootstrap/dist/js/bootstrap.bundle.min.js";
// import "../src/assets/js/custom.js";
// import "../src/assets/js/tiny-slider.js";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
