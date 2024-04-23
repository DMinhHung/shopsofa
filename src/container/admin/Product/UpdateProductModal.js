import React, { useEffect, useRef, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import axios from "axios";

const UpdateProductModal = ({ product, onClose }) => {
  const fileInputRef = useRef(null);
  const additionalFileInputRefs = useRef(Array.from({ length: 4 }, () => null));
  const [previewImage, setPreviewImage] = useState(null);
  const [additionalPreviews, setAdditionalPreviews] = useState(
    Array.from({ length: 4 }, () => null)
  );
  const [updatedProduct, setUpdatedProduct] = useState({
    name: product.name,
    price: product.price,
    description: product.description,
    sizepd: product.sizepd,
    colorpd: product.colorpd,
    materialpd: product.materialpd,
    warrantypd: product.warrantypd,
    advantage: product.advantage,
    image: null,
    additionalImages: Array.from({ length: 4 }, () => null),
  });

  useEffect(() => {
    if (product.image) {
      setPreviewImage(`http://localhost:8000/${product.image}`);
    }
    if (product.additionalImages && product.additionalImages.length > 0) {
      const newPreviews = product.additionalImages.map(
        (imageName) => `http://localhost:8000/${imageName}`
      );
      setAdditionalPreviews(newPreviews);
    }
    if (product.imagep1) {
      setAdditionalPreviews((prevState) => {
        const newPreviews = [...prevState];
        newPreviews[0] = `http://localhost:8000/${product.imagep1}`;
        return newPreviews;
      });
    }
    if (product.imagep2) {
      setAdditionalPreviews((prevState) => {
        const newPreviews = [...prevState];
        newPreviews[1] = `http://localhost:8000/${product.imagep2}`;
        return newPreviews;
      });
    }
    if (product.imagep3) {
      setAdditionalPreviews((prevState) => {
        const newPreviews = [...prevState];
        newPreviews[2] = `http://localhost:8000/${product.imagep3}`;
        return newPreviews;
      });
    }
    if (product.imagep4) {
      setAdditionalPreviews((prevState) => {
        const newPreviews = [...prevState];
        newPreviews[3] = `http://localhost:8000/${product.imagep4}`;
        return newPreviews;
      });
    }
  }, [product]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewImage(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
      setUpdatedProduct((prevProduct) => ({
        ...prevProduct,
        image: file,
      }));
    }
  };

  const handleAdditionalImageChange = (e, index) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      const newPreviews = [...additionalPreviews];
      newPreviews[index] = reader.result;
      setAdditionalPreviews(newPreviews);
    };
    if (file) {
      reader.readAsDataURL(file);
      setUpdatedProduct((prevProduct) => {
        const newAdditionalImages = [...prevProduct.additionalImages];
        newAdditionalImages[index] = file;
        return {
          ...prevProduct,
          additionalImages: newAdditionalImages,
        };
      });
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleAdditionalButtonClick = (index) => {
    additionalFileInputRefs.current[index].click();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", updatedProduct.name);
      formData.append("price", updatedProduct.price);
      formData.append("description", updatedProduct.description);
      formData.append("sizepd", updatedProduct.sizepd);
      formData.append("colorpd", updatedProduct.colorpd);
      formData.append("materialpd", updatedProduct.materialpd);
      formData.append("warrantypd", updatedProduct.warrantypd);
      formData.append("advantage", updatedProduct.advantage);
      formData.append("image", updatedProduct.image);

      // Thêm trường ẩn cho mỗi ảnh phụ
      formData.append("hasImagep1", updatedProduct.additionalImages[0] ? 1 : 0);
      formData.append("hasImagep2", updatedProduct.additionalImages[1] ? 1 : 0);
      formData.append("hasImagep3", updatedProduct.additionalImages[2] ? 1 : 0);
      formData.append("hasImagep4", updatedProduct.additionalImages[3] ? 1 : 0);

      // Thêm tất cả các ảnh phụ vào formData
      updatedProduct.additionalImages.forEach((image, index) => {
        formData.append(`imagep${index + 1}`, image);
      });

      // Kiểm tra giá trị của trường ẩn và chỉ gửi yêu cầu nếu có ảnh phụ mới được tải lên
      if (updatedProduct.additionalImages.some((image) => image)) {
        await axios.post(
          `http://localhost:8000/api/updateproducts/${product.id}`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        alert("Product updated successfully!");
        onClose();
        window.location.reload();
      } else {
        // Nếu không có ảnh phụ mới được tải lên, chỉ cập nhật thông tin sản phẩm
        await axios.put(
          `http://localhost:8000/api/updateproducts/${product.id}`,
          updatedProduct,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        alert("Product information updated successfully!");
        onClose();
        window.location.reload();
      }
    } catch (error) {
      console.error("Error updating product:", error.response.data);
    }
  };

  return (
    <Modal show={true} onHide={onClose} size="xl" backdrop="static">
      <Modal.Header closeButton>
        <Modal.Title>Edit Product</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleSubmit}>
          {/* Product Name */}
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
          {/* Product Price */}
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
          {/* Product Description */}
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
          {/* Product Size */}
          <div className="mb-3">
            <label htmlFor="sizepd" className="form-label">
              Size
            </label>
            <input
              type="text"
              className="form-control"
              id="sizepd"
              name="sizepd"
              value={updatedProduct.sizepd}
              onChange={handleChange}
              placeholder="Enter product size"
            />
          </div>
          {/* Product Color */}
          <div className="mb-3">
            <label htmlFor="colorpd" className="form-label">
              Color
            </label>
            <input
              type="text"
              className="form-control"
              id="colorpd"
              name="colorpd"
              value={updatedProduct.colorpd}
              onChange={handleChange}
              placeholder="Enter product color"
            />
          </div>
          {/* Product Material */}
          <div className="mb-3">
            <label htmlFor="materialpd" className="form-label">
              Material
            </label>
            <input
              type="text"
              className="form-control"
              id="materialpd"
              name="materialpd"
              value={updatedProduct.materialpd}
              onChange={handleChange}
              placeholder="Enter product material"
            />
          </div>
          {/* Product Warranty */}
          <div className="mb-3">
            <label htmlFor="warrantypd" className="form-label">
              Warranty
            </label>
            <input
              type="text"
              className="form-control"
              id="warrantypd"
              name="warrantypd"
              value={updatedProduct.warrantypd}
              onChange={handleChange}
              placeholder="Enter product warranty"
            />
          </div>
          {/* Product Advantage */}
          <div className="mb-3">
            <label htmlFor="advantage" className="form-label">
              Advantage
            </label>
            <input
              type="text"
              className="form-control"
              id="advantage"
              name="advantage"
              value={updatedProduct.advantage}
              onChange={handleChange}
              placeholder="Enter product advantage"
            />
          </div>
          {/* Product Image */}
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
                // backgroundImage: `url(${previewImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              onClick={handleButtonClick}
            >
              {previewImage || `http://localhost:8000/${product.image}` ? (
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
          {/* Additional Images */}
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
                    // backgroundImage: `url(${additionalPreviews[index]})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  onClick={() => handleAdditionalButtonClick(index)}
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
          {/* Submit Button */}
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
