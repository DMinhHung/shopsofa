import React, { useRef, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Header from "../../../components/admin/Header";
import NavUser from "../../../components/admin/NavUser";
const AddProduct = () => {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productImage, setProductImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const fileInputRef = useRef(null);
  const navigate = useNavigate();

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setProductImage(file);
    setPreviewImage(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", productName);
      formData.append("price", productPrice);
      formData.append("description", productDescription);
      formData.append("image", productImage);
      await axios.post("http://localhost:8000/api/addproducts", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert("Product added successfully!");
      navigate("/product");
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to add product. Please try again!");
    }
  };

  return (
    <>
      <div>
        <div className="wrapper">
          <div id="overlay" />
          <Header />
          <div className="content">
            <NavUser />
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
                        <form className="mt-5" onSubmit={handleSubmit}>
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
                                  value={productName}
                                  onChange={(e) =>
                                    setProductName(e.target.value)
                                  }
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
                                  value={productPrice}
                                  onChange={(e) =>
                                    setProductPrice(e.target.value)
                                  }
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
                                  value={productDescription}
                                  onChange={(e) =>
                                    setProductDescription(e.target.value)
                                  }
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
                                    backgroundImage: `url(${previewImage})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                  }}
                                  onClick={handleButtonClick}
                                >
                                  {previewImage ? (
                                    <img
                                      src={previewImage}
                                      alt="Preview"
                                      style={{
                                        width: "100%",
                                        height: "auto",
                                        marginBottom: "10px",
                                      }}
                                    />
                                  ) : (
                                    <div className="file-input-label">
                                      Please Choose File Image
                                    </div>
                                  )}
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
          </div>
        </div>
      </div>
    </>
  );
};

export default AddProduct;
