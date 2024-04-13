import React from "react";
import Header from "../../components/admin/Header";
import NavUser from "../../components/admin/NavUser";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
const Product = () => {
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
                  <div className="fs-4 text-secondary fw-bolder">Product</div>
                  <div
                    className="text-secondary lead fw-normal"
                    id="curr_date_time"
                  />
                </div>
                <hr />
                <div className="row g-4">
                  <div className="col-lg-12">
                    <div className="card">
                      <h5 className="card-header">Product</h5>
                      <div className="card-body">
                        <div className="d-flex">
                          <div className="col-6">
                            <p className="card-text text-start">Show</p>
                          </div>
                          <div className="col-6 text-end">
                            <span className="card-text text-end">Search :</span>{" "}
                            <span></span>
                            <input />
                          </div>
                        </div>

                        <p class="card-text text-end mt-4">
                          <a className="btn btn-primary" href="/addproduct">
                            Add Product
                          </a>
                        </p>

                        <table class="table table-hover text-center mt-4">
                          <thead>
                            <tr>
                              <th scope="col">ID</th>
                              <th scope="col">Name</th>
                              <th scope="col">Image</th>
                              <th scope="col">Price</th>
                              <th scope="col">Description</th>
                              <th scope="col">Delete</th>
                              <th scope="col">Update</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              {/* <th scope="row">1</th> */}
                              <td>1</td>
                              <td>Sofa</td>
                              <td>Image</td>
                              <td>500</td>
                              <td>Đẹp lắm</td>
                              <td>
                                <FontAwesomeIcon icon={faTrashCan} />
                              </td>
                              <td>
                                <FontAwesomeIcon icon={faPenToSquare} />
                              </td>
                            </tr>
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
            {/* <footer className="bg-light shadow text-secondary text-center d-flex flex-column flex-md-row justify-content-between p-3 p-md-4">
              <div>
                Copyright © 2022 <a href="https://dcodemania.com">DCodeMania</a>
              </div>
              <div>Made with ❤️ in India</div>
            </footer> */}
            {/* footer end */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
