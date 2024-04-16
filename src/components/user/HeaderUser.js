import React from "react";

import userSvg from "../../assets/user/images/user.svg";
import cartSvg from "../../assets/user/images/cart.svg";
const HeaderUser = () => {
  return (
    <>
      <nav
        className="custom-navbar navbar navbar navbar-expand-md navbar-dark"
        arial-label="Furni navigation bar"
      >
        <div className="container">
          <a className="navbar-brand" href="/">
            Furni<span>.</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsFurni"
            aria-controls="navbarsFurni"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarsFurni">
            <ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
              <li className="nav-item active">
                <a className="nav-link" href="/">
                  Home
                </a>
              </li>
              <li>
                <a className="nav-link" href="/shop">
                  Shop
                </a>
              </li>
              <li>
                <a className="nav-link" href="/about">
                  About us
                </a>
              </li>
              <li>
                <a className="nav-link" href="/services">
                  Services
                </a>
              </li>
              <li>
                <a className="nav-link" href="/blog">
                  Blog
                </a>
              </li>
              <li>
                <a className="nav-link" href="/contact">
                  Contact us
                </a>
              </li>
            </ul>
            <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
              <li>
                <a className="nav-link" href="/login">
                  <img src={userSvg} />
                </a>
              </li>
              <li>
                <a className="nav-link" href="/shoppingcart">
                  <img src={cartSvg} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default HeaderUser;
