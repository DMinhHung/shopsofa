import React, { useEffect, useState } from "react";
import Header from "../../components/admin/Header";
import NavUser from "../../components/admin/NavUser";
import axios from "axios";

const Order = () => {
  const [orders, setOrders] = useState([]);
  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/order");
      setOrders(response.data.orders);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

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
                  <div className="fs-4 text-secondary fw-bolder">Orders</div>
                  <div
                    className="text-secondary lead fw-normal"
                    id="curr_date_time"
                  />
                </div>
                <hr />
                <div className="row g-4">
                  <div className="col-lg-12">
                    <div className="card">
                      <h5 className="card-header">Orders</h5>
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
                              <th scope="col">#</th>
                              <th scope="col">ID</th>
                              <th scope="col">Name</th>
                              <th scope="col">Image</th>
                              <th scope="col">Address</th>
                              <th scope="col">Date</th>
                              <th scope="col">Price</th>
                              {/* <th scope="col">Delete</th>
      <th scope="col">Update</th> */}
                            </tr>
                          </thead>
                          <tbody>
                            {orders.map((order) => (
                              <tr key={order.id}>
                                <td style={{ paddingTop: "30px" }}>
                                  {order.order_id}
                                </td>
                                <td style={{ paddingTop: "30px" }}>
                                  {order.order_code}
                                </td>
                                <td style={{ paddingTop: "30px" }}>
                                  {order.product_name}
                                </td>
                                <td>
                                  <img
                                    style={{ width: "80px" }}
                                    src={`http://localhost:8000/${order.product_image}`}
                                    alt={order.name}
                                  />
                                </td>
                                <td style={{ paddingTop: "30px" }}>
                                  {order.user_address}
                                </td>

                                <td style={{ paddingTop: "30px" }}>
                                  {order.order_date}
                                </td>

                                <td style={{ paddingTop: "30px" }}>
                                  {order.product_price}
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

export default Order;
