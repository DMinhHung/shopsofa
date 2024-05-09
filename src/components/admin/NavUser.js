import React, { useEffect, useState } from "react";
import axios from "axios";
const NavUser = () => {
  const [users, setUsers] = useState([]);

  const fetchData = async () => {
    const userId = localStorage.getItem("userid");
    try {
      const response = await axios.get(
        `http://localhost:8000/api/getuser/${userId}`
      );
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
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
            <div className="">
              <a
                className="nav-link py-1 px-3 rounded-1"
                href="#"
                role="button"
                data-bs-toggle=""
                aria-expanded="false"
              >
                <img
                  src={`http://localhost:8000/avatars/${users.image}`}
                  style={{ width: "40px", height: "40px", borderRadius: "50%" }}
                  className="avatar-icon me-1"
                  alt="Avatar"
                />
                <i className="fas fa-user-circle me-1" />
                {users.name}
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavUser;
