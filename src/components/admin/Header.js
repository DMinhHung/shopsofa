import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGauge,
  faTable,
  faCircleUser,
  faArrowRightFromBracket,
  faCartShopping,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <>
      <div className="sidebar shadow">
        <div className="admin_brand d-flex justify-content-between align-items-baseline">
          <div>
            <a className="nav-link fw-bold" href="#">
              <span className="icon"></span>
              <span className="menu">Admin Panel</span>
            </a>
          </div>
          <div className="d-block d-md-none">
            <a href="javascript:void(0)" id="close_sidebar">
              <i className="fas fa-times-circle fa-lg" />
            </a>
          </div>
        </div>
        <ul className="nav nav-pills flex-column">
          <li className="nav-item active">
            <a className="nav-link" href="/dashboard">
              <span
                className="icon"
                data-bs-toggle="tooltip"
                data-bs-title="Dashboard"
              >
                <FontAwesomeIcon icon={faGauge} />
              </span>
              <span className="menu">Dashboard</span>
            </a>
          </li>
          {/* drodown menu start */}
          <li
            className="nav-item position-relative"
            data-bs-toggle="collapse"
            href="#masterCollapse"
            role="button"
            aria-expanded="false"
            aria-controls="masterCollapse"
          >
            <a className="nav-link" href="#">
              <span
                className="icon"
                data-bs-toggle="tooltip"
                data-bs-title="Master"
              >
                <FontAwesomeIcon icon={faTable} />
              </span>
              <span className="menu">Table</span>
            </a>
          </li>
          <div className="collapse" id="masterCollapse">
            <li className="nav-item">
              <a className="nav-link" href="/admin/product">
                <span
                  className="icon"
                  data-bs-toggle="tooltip"
                  data-bs-title="Product"
                >
                  <i className="fas fa-cube" />
                </span>
                <span className="menu">Product</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/admin/ourteam">
                <span
                  className="icon"
                  data-bs-toggle="tooltip"
                  data-bs-title="Employee"
                >
                  <i className="fas fa-cube" />
                </span>
                <span className="menu">OurTeam</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/admin/blogad">
                <span
                  className="icon"
                  data-bs-toggle="tooltip"
                  data-bs-title="Employee"
                >
                  <i className="fas fa-cube" />
                </span>
                <span className="menu">Blog</span>
              </a>
            </li>
          </div>
          {/* dropdown menu end */}
          <li className="nav-item">
            <a className="nav-link" href="/admin/user">
              <span
                className="icon"
                data-bs-toggle="tooltip"
                data-bs-title="Users"
              >
                <FontAwesomeIcon icon={faCircleUser} />
              </span>
              <span className="menu">Users</span>
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="/admin">
              <span
                className="icon"
                data-bs-toggle="tooltip"
                data-bs-title="Order"
              >
                <FontAwesomeIcon icon={faCartShopping} />
              </span>
              <span className="menu">Order</span>
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="/">
              <span
                className="icon"
                data-bs-toggle="tooltip"
                data-bs-title="Order"
              >
                <FontAwesomeIcon icon={faHouse} />
              </span>
              <span className="menu">Home</span>
            </a>
          </li>

          {/* <li className="nav-item">
            <a className="nav-link" href="/admin">
              <span
                className="icon"
                data-bs-toggle="tooltip"
                data-bs-title="Logout"
              >
                <FontAwesomeIcon icon={faArrowRightFromBracket} />
              </span>
              <span className="menu">Logout</span>
            </a>
          </li> */}
        </ul>
      </div>
    </>
  );
};

export default Header;
