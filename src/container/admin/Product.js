import React, { useEffect, useState } from "react";
import Header from "../../components/admin/Header";
import NavUser from "../../components/admin/NavUser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import UpdateProductModal from "../admin/Product/UpdateProductModal";
import AddProductModal from "../admin/Product/AddProductModal";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/getproducts");
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Delete Product
  const handleDelete = async (id) => {
    try {
      console.log("Button clicked");
      await axios.delete(`http://localhost:8000/api/products/${id}`);
      fetchData();
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  // Open Modal for Update
  const handleUpdate = (product) => {
    console.log("Updating product:", product);
    setSelectedProduct(product);
    setIsUpdateModalOpen(true);
  };

  // Open Modal for Add
  const handleAdd = () => {
    setIsAddModalOpen(true);
  };

  const handleCloseUpdateModal = () => {
    setIsUpdateModalOpen(false);
  };

  const handleCloseAddModal = () => {
    setIsAddModalOpen(false);
  };

  return (
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
                    <h5 className="card-header">Product</h5>
                    <div className="card-body">
                      <div className="d-flex">
                        <div className="col-6">
                          <p className="card-text text-start">Show</p>
                        </div>
                        <div className="col-6 text-end">
                          <span className="card-text text-end">Search :</span>{" "}
                          <input />
                        </div>
                      </div>
                      <button className="btn btn-primary" onClick={handleAdd}>
                        Add Product
                      </button>
                      <table className="table table-hover text-center mt-4">
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
                          {products.map((product) => (
                            <tr key={product.id}>
                              <td>{product.id}</td>
                              <td>{product.name}</td>
                              <td>
                                <img
                                  style={{ width: "80px" }}
                                  src={`http://localhost:8000/${product.image}`}
                                  alt={product.name}
                                />
                              </td>
                              <td>{product.price}</td>
                              <td>{product.description}</td>
                              <td>
                                <button
                                  onClick={() => handleDelete(product.id)}
                                >
                                  <FontAwesomeIcon icon={faTrashCan} />
                                </button>
                              </td>
                              <td>
                                <button onClick={() => handleUpdate(product)}>
                                  <FontAwesomeIcon icon={faPenToSquare} />
                                </button>
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
        </div>
      </div>
      {isUpdateModalOpen && (
        <UpdateProductModal
          product={selectedProduct}
          onClose={handleCloseUpdateModal}
        />
      )}
      {isAddModalOpen && (
        <AddProductModal show={isAddModalOpen} onClose={handleCloseAddModal} />
      )}
    </div>
  );
};

export default Product;
