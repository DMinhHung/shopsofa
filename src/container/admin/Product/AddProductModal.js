import React, { useState, useRef } from "react";
import { Modal, Button } from "react-bootstrap";
import axios from "axios";

const AddProductModal = ({ show, onClose }) => {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productImage, setProductImage] = useState(null);
  const [sizepd, setSizepd] = useState("");
  const [colorpd, setColorpd] = useState("");
  const [materialpd, setMaterialpd] = useState("");
  const [warrantypd, setWarrantypd] = useState("");
  const [advantage, setAdvantage] = useState("");
  const [previewImage, setPreviewImage] = useState(null);
  const [additionalImages, setAdditionalImages] = useState(
    Array.from({ length: 4 }, () => null)
  );
  const [additionalPreviews, setAdditionalPreviews] = useState(
    Array.from({ length: 4 }, () => null)
  );
  const fileInputRef = useRef(null);
  const additionalFileInputRefs = useRef([]);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    console.log("Selected file:", file);
    if (file && file.type.startsWith("image")) {
      setProductImage(file);
      setPreviewImage(URL.createObjectURL(file));
    } else {
      console.error("Invalid file selected.");
      alert("Please select a valid image file.");
    }
  };

  const handleAdditionalImageChange = (e, index) => {
    const file = e.target.files[0];
    console.log(`Selected additional image ${index + 1}:`, file);
    if (file && file.type.startsWith("image")) {
      const newImages = [...additionalImages];
      newImages[index] = file;
      setAdditionalImages(newImages);

      const newPreviews = [...additionalPreviews];
      newPreviews[index] = URL.createObjectURL(file);
      setAdditionalPreviews(newPreviews);
    } else {
      console.error("Invalid file selected.");
      alert("Please select a valid image file.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", productName);
      formData.append("price", productPrice);
      formData.append("description", productDescription);
      formData.append("sizepd", sizepd);
      formData.append("colorpd", colorpd);
      formData.append("materialpd", materialpd);
      formData.append("warrantypd", warrantypd);
      formData.append("advantage", advantage);
      formData.append("image", productImage);

      additionalImages.forEach((image, index) => {
        if (image) {
          formData.append(`imagep${index + 1}`, image);
        }
      });

      console.log("FormData entries:");
      for (const entry of formData.entries()) {
        console.log(entry);
      }

      await axios.post("http://localhost:8000/api/addproducts", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      alert("Product added successfully!");
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
        <Modal.Title>Add Product</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="productName" className="form-label">
              Product Name
            </label>
            <input
              type="text"
              className="form-control"
              id="productName"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              placeholder="Enter product name"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="productPrice" className="form-label">
              Product Price
            </label>
            <input
              type="number"
              className="form-control"
              id="productPrice"
              value={productPrice}
              onChange={(e) => setProductPrice(e.target.value)}
              placeholder="Enter product price"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="productDescription" className="form-label">
              Product Description
            </label>
            <textarea
              className="form-control"
              id="productDescription"
              value={productDescription}
              onChange={(e) => setProductDescription(e.target.value)}
              rows="3"
              placeholder="Enter product description"
            ></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="sizepd" className="form-label">
              Size
            </label>
            <input
              type="text"
              className="form-control"
              id="sizepd"
              value={sizepd}
              onChange={(e) => setSizepd(e.target.value)}
              placeholder="Enter product size"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="colorpd" className="form-label">
              Color
            </label>
            <input
              type="text"
              className="form-control"
              id="colorpd"
              value={colorpd}
              onChange={(e) => setColorpd(e.target.value)}
              placeholder="Enter product color"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="materialpd" className="form-label">
              Material
            </label>
            <input
              type="text"
              className="form-control"
              id="materialpd"
              value={materialpd}
              onChange={(e) => setMaterialpd(e.target.value)}
              placeholder="Enter product material"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="warrantypd" className="form-label">
              Warranty
            </label>
            <input
              type="text"
              className="form-control"
              id="warrantypd"
              value={warrantypd}
              onChange={(e) => setWarrantypd(e.target.value)}
              placeholder="Enter product warranty"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="advantage" className="form-label">
              Advantage
            </label>
            <input
              type="text"
              className="form-control"
              id="advantage"
              value={advantage}
              onChange={(e) => setAdvantage(e.target.value)}
              placeholder="Enter product advantage"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="productImage" className="form-label">
              Product Image
            </label>
            <input
              type="file"
              className="form-control"
              id="productImage"
              onChange={handleFileChange}
              ref={fileInputRef}
              style={{ display: "none" }}
            />
            <div
              className="file-input-frame"
              style={{
                width: "auto", // Kích thước của khung hình ảnh
                height: "500px", // Kích thước của khung hình ảnh
                border: "2px dashed #ccc", // Viền đứt nét màu xám
                borderRadius: "5px", // Độ cong góc của khung hình ảnh
                cursor: "pointer", // Con trỏ chuột biểu thị là có thể click
                // backgroundImage: `url(${previewImage})`, // Ảnh nền là ảnh được chọn
                backgroundSize: "cover", // Hiển thị ảnh đầy đủ bên trong khung
                backgroundPosition: "center", // Căn giữa ảnh
                display: "flex", // Sắp xếp các phần tử theo chiều ngang
                alignItems: "center", // Căn chỉnh theo chiều dọc
                justifyContent: "center", // Căn chỉnh theo chiều ngang
              }}
              onClick={handleButtonClick}
            >
              {previewImage ? (
                <img
                  src={previewImage}
                  alt="Preview"
                  style={{
                    maxWidth: "100%",
                    maxHeight: "100%",
                  }}
                />
              ) : (
                <div className="file-input-label">Please Choose File Image</div>
              )}
            </div>
          </div>
          {/* Additional image upload fields */}
          <div className="row">
            {[0, 1, 2, 3].map((index) => (
              <div key={index} className="col-3">
                <input
                  type="file"
                  className="form-control"
                  onChange={(e) => handleAdditionalImageChange(e, index)}
                  style={{ display: "none" }}
                  ref={(el) => (additionalFileInputRefs.current[index] = el)}
                />
                <div
                  className="file-input-frame mr-3 mb-3"
                  style={{
                    width: "auto",
                    height: "200px",
                    border: "2px dashed #ccc",
                    borderRadius: "5px",
                    cursor: "pointer",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    display: "flex",
                  }}
                  onClick={() => additionalFileInputRefs.current[index].click()}
                >
                  {additionalPreviews[index] && (
                    <img
                      src={additionalPreviews[index]}
                      alt={`Preview ${index}`}
                      style={{
                        maxWidth: "100%",
                        maxHeight: "100%",
                      }}
                    />
                  )}
                </div>
              </div>
            ))}
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

export default AddProductModal;
