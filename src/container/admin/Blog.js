import React, { useEffect, useState } from "react";
import Header from "../../components/admin/Header";
import NavUser from "../../components/admin/NavUser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import AddBlogModal from "./Blog/AddBlogModal";
import UpdateBlogModal from "./Blog/UpdateBlogModal";
const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/getblog");
      setBlogs(response.data);
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
      await axios.delete(`http://localhost:8000/api/blog/${id}`);
      fetchData();
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  // Open Modal for Update
  const handleUpdate = (product) => {
    console.log("Updating product:", product);
    setSelectedBlog(product);
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
                  <div className="fs-4 text-secondary fw-bolder">Blog</div>
                  <div
                    className="text-secondary lead fw-normal"
                    id="curr_date_time"
                  />
                </div>
                <hr />
                <div className="row g-4">
                  <div className="col-lg-12">
                    <div className="card">
                      <h5 className="card-header">Blog</h5>
                      <div className="card-body">
                        <div className="d-flex">
                          <div className="col-6">
                            <span className="card-text text-end">Search :</span>{" "}
                            <input />
                          </div>
                          <div className="col-6 text-end">
                            <button
                              className="btn btn-primary"
                              onClick={handleAdd}
                            >
                              Add Product
                            </button>
                          </div>
                        </div>

                        <table className="table table-hover text-center mt-4">
                          <thead>
                            <tr>
                              <th scope="col">ID</th>
                              <th scope="col">Name</th>
                              <th scope="col">Image</th>
                              <th scope="col">Description</th>
                              <th scope="col">Delete</th>
                              <th scope="col">Update</th>
                            </tr>
                          </thead>
                          <tbody>
                            {blogs.map((blog) => (
                              <tr key={blog.id}>
                                <td>{blog.id}</td>
                                <td>{blog.name}</td>
                                <td>
                                  <img
                                    style={{ width: "80px" }}
                                    src={`http://localhost:8000/images/${blog.image}`}
                                    alt={blog.name}
                                  />
                                </td>
                                <td>{blog.description}</td>
                                <td className="align-middle">
                                  <button
                                    className="btn btn-danger"
                                    onClick={() => handleDelete(blog.id)}
                                  >
                                    <FontAwesomeIcon icon={faTrashCan} />
                                  </button>
                                </td>
                                <td className="align-middle">
                                  <button
                                    className="btn btn-primary"
                                    onClick={() => handleUpdate(blog)}
                                  >
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
          <UpdateBlogModal
            blog={selectedBlog}
            onClose={handleCloseUpdateModal}
          />
        )}
        {isAddModalOpen && (
          <AddBlogModal show={isAddModalOpen} onClose={handleCloseAddModal} />
        )}
      </div>
    </>
  );
};

export default Blog;
