import React, { useState, useRef } from "react";
import { Modal, Button } from "react-bootstrap";
import axios from "axios";

const AddBlogModal = ({ show, onClose }) => {
  const [blogName, setBlogName] = useState("");
  const [blogDescription, setBlogDescription] = useState("");
  const [blogImage, setBlogImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setBlogImage(file);
    setPreviewImage(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", blogName);
      formData.append("description", blogDescription);
      formData.append("image", blogImage);
      await axios.post("http://localhost:8000/api/addblog", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert("Blog added successfully!");
      onClose();
      window.location.reload();
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to add product. Please try again!");
    }
  };

  return (
    <Modal show={show} onHide={onClose} size="xl" backdrop="static">
      <Modal.Header closeButton>
        <Modal.Title>Add Blog</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="blogName" className="form-label">
              Blog Name
            </label>
            <input
              type="text"
              className="form-control"
              id="productName"
              value={blogName}
              onChange={(e) => setBlogName(e.target.value)}
              placeholder="Enter blog name"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="blogDescription" className="form-label">
              Blog Description
            </label>
            <textarea
              className="form-control"
              id="blogDescription"
              value={blogDescription}
              onChange={(e) => setBlogDescription(e.target.value)}
              rows="3"
              placeholder="Enter blog description"
            ></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="blogImage" className="form-label">
              Blog Image
            </label>
            <input
              type="file"
              className="form-control"
              id="blogImage"
              onChange={handleFileChange}
              ref={fileInputRef}
              style={{ display: "none" }}
            />
            <div
              className="file-input-frame"
              style={{
                width: "100%",
                height: "auto",
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
                <div className="file-input-label">Please Choose File Image</div>
              )}
            </div>
          </div>
          <div className="text-center">
            <Button variant="primary" type="submit">
              Add Product
            </Button>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default AddBlogModal;
