import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import axios from "axios"; // Import axios để gửi yêu cầu HTTP
import userSvg from "../../assets/user/images/user.svg";
import cartSvg from "../../assets/user/images/cart.svg";

const HeaderUser = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const isLoggedIn = !!localStorage.getItem("usertoken");

  const handleToggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleLogout = async () => {
    try {
      const token = localStorage.getItem("usertoken");
      const response = await axios.post(
        "http://localhost:8000/api/logout",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("Logout successful:", response.data);
      localStorage.removeItem("usertoken");
      localStorage.removeItem("userrole");
      window.location.reload();
    } catch (error) {
      console.error("Logout failed:", error.response.data);
    }
  };

  return (
    <nav
      className="custom-navbar navbar navbar-expand-md navbar-dark"
      aria-label="Furni navigation bar"
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
            {isLoggedIn ? (
              <li className="nav-item">
                <Dropdown
                  show={showDropdown}
                  onClose={() => setShowDropdown(false)}
                >
                  <Dropdown.Toggle
                    as="a"
                    className="nav-link"
                    onClick={handleToggleDropdown}
                  >
                    <img src={userSvg} alt="User" />
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item>
                      <Link to="/profile" className="dropdown-item">
                        Profile
                      </Link>
                      <button className="dropdown-item" onClick={handleLogout}>
                        Logout
                      </button>{" "}
                      {/* Thêm một button để đăng xuất */}
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </li>
            ) : (
              <li className="nav-item">
                <Link to="/login" className="nav-link">
                  <img src={userSvg} alt="Cart" />
                </Link>
              </li>
            )}
            <li>
              <Link to="/shoppingcart" className="nav-link">
                <img src={cartSvg} alt="Shopping Cart" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default HeaderUser;
