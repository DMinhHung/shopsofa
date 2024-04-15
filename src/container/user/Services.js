import React from "react";
import HeaderUser from "../../components/user/HeaderUser";
import FooterUser from "../../components/user/FooterUser";

import couchImage from "../../assets/user/images/couch.png";
import Testimonial from "../../components/user/Testimonial";

import truckSvg from "../../assets/user/images/truck.svg";
import bagSvg from "../../assets/user/images/bag.svg";
import supportSvg from "../../assets/user/images/support.svg";
import returnSvg from "../../assets/user/images/return.svg";
import crossSvg from "../../assets/user/images/cross.svg";

import product1Png from "../../assets/user/images/product-1.png";
import product2Png from "../../assets/user/images/product-2.png";
import product3Png from "../../assets/user/images/product-3.png";

const Services = () => {
  return (
    <>
      <div>
        <HeaderUser />
        <div className="hero">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-lg-5">
                <div className="intro-excerpt">
                  <h1>Services</h1>
                  <p className="mb-4">
                    Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                    aliquet velit. Aliquam vulputate velit imperdiet dolor
                    tempor tristique.
                  </p>
                  <p>
                    <a href className="btn btn-secondary me-2">
                      Shop Now
                    </a>
                    <a href="#" className="btn btn-white-outline">
                      Explore
                    </a>
                  </p>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="hero-img-wrap">
                  <img src={couchImage} className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Hero Section */}
        {/* Start Why Choose Us Section */}
        <div className="why-choose-section">
          <div className="container">
            <div className="row my-5">
              <div className="col-6 col-md-6 col-lg-3 mb-4">
                <div className="feature">
                  <div className="icon">
                    <img src={truckSvg} alt="Image" className="imf-fluid" />
                  </div>
                  <h3>Fast &amp; Free Shipping</h3>
                  <p>
                    Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                    aliquet velit. Aliquam vulputate.
                  </p>
                </div>
              </div>
              <div className="col-6 col-md-6 col-lg-3 mb-4">
                <div className="feature">
                  <div className="icon">
                    <img src={bagSvg} alt="Image" className="imf-fluid" />
                  </div>
                  <h3>Easy to Shop</h3>
                  <p>
                    Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                    aliquet velit. Aliquam vulputate.
                  </p>
                </div>
              </div>
              <div className="col-6 col-md-6 col-lg-3 mb-4">
                <div className="feature">
                  <div className="icon">
                    <img src={supportSvg} alt="Image" className="imf-fluid" />
                  </div>
                  <h3>24/7 Support</h3>
                  <p>
                    Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                    aliquet velit. Aliquam vulputate.
                  </p>
                </div>
              </div>
              <div className="col-6 col-md-6 col-lg-3 mb-4">
                <div className="feature">
                  <div className="icon">
                    <img src={returnSvg} alt="Image" className="imf-fluid" />
                  </div>
                  <h3>Hassle Free Returns</h3>
                  <p>
                    Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                    aliquet velit. Aliquam vulputate.
                  </p>
                </div>
              </div>
              <div className="col-6 col-md-6 col-lg-3 mb-4">
                <div className="feature">
                  <div className="icon">
                    <img src={truckSvg} alt="Image" className="imf-fluid" />
                  </div>
                  <h3>Fast &amp; Free Shipping</h3>
                  <p>
                    Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                    aliquet velit. Aliquam vulputate.
                  </p>
                </div>
              </div>
              <div className="col-6 col-md-6 col-lg-3 mb-4">
                <div className="feature">
                  <div className="icon">
                    <img src={bagSvg} alt="Image" className="imf-fluid" />
                  </div>
                  <h3>Easy to Shop</h3>
                  <p>
                    Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                    aliquet velit. Aliquam vulputate.
                  </p>
                </div>
              </div>
              <div className="col-6 col-md-6 col-lg-3 mb-4">
                <div className="feature">
                  <div className="icon">
                    <img src={supportSvg} alt="Image" className="imf-fluid" />
                  </div>
                  <h3>24/7 Support</h3>
                  <p>
                    Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                    aliquet velit. Aliquam vulputate.
                  </p>
                </div>
              </div>
              <div className="col-6 col-md-6 col-lg-3 mb-4">
                <div className="feature">
                  <div className="icon">
                    <img src={returnSvg} alt="Image" className="imf-fluid" />
                  </div>
                  <h3>Hassle Free Returns</h3>
                  <p>
                    Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                    aliquet velit. Aliquam vulputate.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Why Choose Us Section */}
        {/* Start Product Section */}
        <div className="product-section pt-0">
          <div className="container">
            <div className="row">
              {/* Start Column 1 */}
              <div className="col-md-12 col-lg-3 mb-5 mb-lg-0">
                <h2 className="mb-4 section-title">
                  Crafted with excellent material.
                </h2>
                <p className="mb-4">
                  Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                  aliquet velit. Aliquam vulputate velit imperdiet dolor tempor
                  tristique.{" "}
                </p>
                <p>
                  <a href="#" className="btn">
                    Explore
                  </a>
                </p>
              </div>
              {/* End Column 1 */}
              {/* Start Column 2 */}
              <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
                <a className="product-item" href="#">
                  <img
                    src={product1Png}
                    className="img-fluid product-thumbnail"
                  />
                  <h3 className="product-title">Nordic Chair</h3>
                  <strong className="product-price">$50.00</strong>
                  <span className="icon-cross">
                    <img src={crossSvg} className="img-fluid" />
                  </span>
                </a>
              </div>
              {/* End Column 2 */}
              {/* Start Column 3 */}
              <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
                <a className="product-item" href="#">
                  <img
                    src={product2Png}
                    className="img-fluid product-thumbnail"
                  />
                  <h3 className="product-title">Kruzo Aero Chair</h3>
                  <strong className="product-price">$78.00</strong>
                  <span className="icon-cross">
                    <img src={crossSvg} className="img-fluid" />
                  </span>
                </a>
              </div>
              {/* End Column 3 */}
              {/* Start Column 4 */}
              <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
                <a className="product-item" href="#">
                  <img
                    src={product3Png}
                    className="img-fluid product-thumbnail"
                  />
                  <h3 className="product-title">Ergonomic Chair</h3>
                  <strong className="product-price">$43.00</strong>
                  <span className="icon-cross">
                    <img src={crossSvg} className="img-fluid" />
                  </span>
                </a>
              </div>
              {/* End Column 4 */}
            </div>
          </div>
        </div>
        {/* End Product Section */}
        {/* Start Testimonial Slider */}
        <Testimonial />
        {/* End Testimonial Slider */}
        {/* Start Footer Section */}
        <FooterUser />
      </div>
    </>
  );
};

export default Services;
