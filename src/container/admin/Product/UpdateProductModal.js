import React, { useEffect, useRef, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import axios from "axios";

const UpdateProductModal = ({ product, onClose }) => {
  const fileInputRef = useRef(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [updatedProduct, setUpdatedProduct] = useState({
    name: product.name,
    price: product.price,
    description: product.description,
    image: null,
  });

  useEffect(() => {
    if (product.image) {
      setPreviewImage(`http://localhost:8000/images/${product.image}`);
    }
  }, [product.image]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    try {
      const formData = new FormData();
      formData.append("name", updatedProduct.name);
      formData.append("price", updatedProduct.price);
      formData.append("description", updatedProduct.description);
      if (updatedProduct.image) {
        formData.append("image", updatedProduct.image);
      }

      await axios.post(
        `http://localhost:8000/api/updateproducts/${product.id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      onClose();
    } catch (error) {
      console.error("Error updating product:", error.response.data);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewImage(reader.result);
    };
    if (file) {
      // Kiểm tra định dạng tệp ảnh
      const allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
      if (!allowedExtensions.exec(file.name)) {
        alert(
          "Only image files with extensions .jpg, .jpeg, .png, .gif are allowed"
        );
        return;
      }
      reader.readAsDataURL(file);
      setUpdatedProduct((prevProduct) => ({
        ...prevProduct,
        image: file, // Lưu trữ hình ảnh vào state khi được chọn
      }));
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };
  // console.log(previewImage);
  return (
    <Modal show={true} onHide={onClose} size="xl" backdrop="static">
      <Modal.Header closeButton>
        <Modal.Title>Edit Product</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Product Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={updatedProduct.name}
              onChange={handleChange}
              placeholder="Enter product name"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="price" className="form-label">
              Product Price
            </label>
            <input
              type="number"
              className="form-control"
              id="price"
              name="price"
              value={updatedProduct.price}
              onChange={handleChange}
              placeholder="Enter product price"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Product Description
            </label>
            <textarea
              className="form-control"
              id="description"
              name="description"
              value={updatedProduct.description}
              onChange={handleChange}
              rows="3"
              placeholder="Enter product description"
            ></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="image" className="form-label">
              Product Image
            </label>
            <input
              type="file"
              className="form-control"
              id="image"
              name="image"
              onChange={handleImageChange}
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
                backgroundImage: `url(${
                  previewImage ||
                  `http://localhost:8000/images/${product.image}`
                })`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              onClick={handleButtonClick}
            >
              {previewImage ||
              `http://localhost:8000/images/${product.image}` ? (
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
              Update Product
            </Button>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default UpdateProductModal;
