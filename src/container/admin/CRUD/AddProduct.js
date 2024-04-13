import React, { useRef } from "react";
import Header from "../../../components/admin/Header";
import NavUser from "../../../components/admin/NavUser";

const AddProduct = () => {
  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    console.log(e.target.files[0]);
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
                      <h5 className="card-header">Add Product</h5>
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

                        <form className="mt-5">
                          <div className="row">
                            <div className="col-md-6">
                              <div className="mb-3">
                                <label
                                  htmlFor="productName"
                                  className="form-label"
                                >
                                  Product Name
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="productName"
                                  placeholder="Enter product name"
                                />
                              </div>
                              <div className="mb-3">
                                <label
                                  htmlFor="productPrice"
                                  className="form-label"
                                >
                                  Product Price
                                </label>
                                <input
                                  type="number"
                                  className="form-control"
                                  id="productPrice"
                                  placeholder="Enter product price"
                                />
                              </div>
                              <div className="mb-3">
                                <label
                                  htmlFor="productDescription"
                                  className="form-label"
                                >
                                  Product Description
                                </label>
                                <textarea
                                  className="form-control"
                                  id="productDescription"
                                  rows="3"
                                  placeholder="Enter product description"
                                ></textarea>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <label
                                htmlFor="productCategory"
                                className="form-label"
                              >
                                Image
                              </label>
                              <div className="file-input-container">
                                <div
                                  className="file-input-frame"
                                  style={{
                                    width: "500px",
                                    height: "350px",
                                    border: "2px dashed #ccc",
                                    borderRadius: "5px",
                                    cursor: "pointer",
                                  }}
                                  onClick={handleButtonClick}
                                >
                                  {/* Khung */}
                                </div>
                                <input
                                  ref={fileInputRef}
                                  type="file"
                                  onChange={handleFileChange}
                                  style={{ display: "none" }}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="text-center">
                            <button
                              type="submit"
                              className="btn btn-primary mt-5 mb-5"
                            >
                              Add Product
                            </button>
                          </div>
                        </form>
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

export default AddProduct;
