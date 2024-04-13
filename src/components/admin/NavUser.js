import React from "react";

const NavUser = () => {
  return (
    <>
      <nav className="navbar navbar-expand-md navbar-light bg-light shadow">
        <div className="container-fluid px-3">
          <button
            className="navbar-toggler border-0"
            type="button"
            id="show_sidebar_phone"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <a
            className="navbar-brand d-none d-md-block"
            href="javascript:void(0)"
            id="show_sidebar_pc"
          >
            <i className="fas fa-bars fa-lg" />
          </a>
          <div className="fw-bold text-secondary d-md-none d-block">
            Admin Panel
          </div>
          <div className="ms-auto d-flex align-items-center">
            <div
              className="nav-item d-none d-md-block me-2"
              data-bs-toggle="tooltip"
              data-bs-title="Full Screen"
              data-bs-placement="left"
            >
              <a href="#" className="nav-link" id="fullscreen">
                <i className="fa-solid fa-expand" />
              </a>
            </div>
            <div className="dropdown">
              <a
                className="nav-link dropdown-toggle py-1 px-3 rounded-1"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="fas fa-user-circle me-1" />
                Sahil
              </a>
              <ul className="dropdown-menu dropdown-menu-end">
                <li>
                  <a className="dropdown-item" href="#">
                    <i className="fa-solid fa-address-card me-2" />
                    Profile
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <i className="fa-solid fa-gear me-2" />
                    Account
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <i className="fa-solid fa-right-from-bracket me-2" />
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavUser;
