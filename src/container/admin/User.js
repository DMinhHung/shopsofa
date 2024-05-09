import React, { useEffect, useState } from "react";
import Header from "../../components/admin/Header";
import NavUser from "../../components/admin/NavUser";
import axios from "axios";
const User = () => {
  const [users, setUsers] = useState([]);
  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/users");
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleRoleChange = async (userId, newRole) => {
    try {
      await axios.post(`http://localhost:8000/api/updaterole/${userId}`, {
        role: newRole,
      });
      fetchData();
    } catch (error) {
      console.error("Error updating role:", error);
    }
  };
  return (
    <>
      <div>
        <div className="wrapper">
          <div id="overlay" />
          {/* sidebar start */}
          <Header />
          {/* sidebar end */}
          <div className="content">
            {/* top navbar start */}
            <NavUser />
            {/* top navbar end */}
            {/* main content start */}
            <main className="bg-secondary bg-opacity-25 min-vh-100">
              <div className="container-fluid p-3 p-md-4">
                <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
                  <div className="fs-4 text-secondary fw-bolder">Users</div>
                  <div
                    className="text-secondary lead fw-normal"
                    id="curr_date_time"
                  />
                </div>
                <hr />
                <div className="row g-4">
                  <div className="col-lg-12">
                    <div className="card">
                      <h5 className="card-header">Users</h5>
                      <div className="card-body">
                        <div className="d-flex">
                          <div className="col-6">
                            {/* <p className="card-text text-start">Show</p> */}
                          </div>
                          <div className="col-6 text-end">
                            <span className="card-text text-end">Search :</span>{" "}
                            <input />
                          </div>
                        </div>
                        {/* <button className="btn btn-primary">Add Product</button> */}
                        <table className="table table-hover text-center mt-4 mx-auto">
                          <thead>
                            <tr>
                              <th scope="col">ID</th>
                              <th scope="col">Name</th>
                              <th scope="col">Image</th>
                              <th scope="col">Email</th>
                              <th scope="col">Address</th>
                              <th scope="col">Role</th>
                              {/* <th scope="col">Delete</th>
      <th scope="col">Update</th> */}
                            </tr>
                          </thead>
                          <tbody>
                            {users.map((user) => (
                              <tr key={user.id}>
                                <td style={{ paddingTop: "30px" }}>
                                  {user.id}
                                </td>
                                <td style={{ paddingTop: "30px" }}>
                                  {user.name}
                                </td>
                                <td>
                                  <img
                                    style={{ width: "80px" }}
                                    src={`http://localhost:8000/avatars/${user.image}`}
                                    alt={user.name}
                                  />
                                </td>
                                <td style={{ paddingTop: "30px" }}>
                                  {user.email}
                                </td>
                                <td style={{ paddingTop: "30px" }}>
                                  {user.address}
                                </td>
                                <td
                                  style={{ paddingTop: "30px", width: "113px" }}
                                >
                                  <select
                                    className="form-select"
                                    value={user.role}
                                    onChange={(e) =>
                                      handleRoleChange(user.id, e.target.value)
                                    }
                                  >
                                    <option value="admin">Admin</option>
                                    <option value="user">User</option>
                                  </select>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>
            {/* main content end */}
            {/* footer start */}
            <footer className="bg-light shadow text-secondary text-center d-flex flex-column flex-md-row justify-content-between p-3 p-md-4">
              <div>
                Copyright © 2022 <a href="https://dcodemania.com">DCodeMania</a>
              </div>
              <div>Made with ❤️ in India</div>
            </footer>
            {/* footer end */}
          </div>
        </div>
      </div>
    </>
  );
};

export default User;
