import React, { useEffect, useRef, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import axios from "axios";

const UpdateOurTeamModal = ({ ourteam, onClose }) => {
  const fileInputRef = useRef(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [updatedOurTeam, setUpdatedOurTeam] = useState({
    name: ourteam.name,
    description: ourteam.description,
    image: null,
  });
  console.log(updatedOurTeam);
  useEffect(() => {
    if (ourteam.image) {
      setPreviewImage(`http://localhost:8000/images/${ourteam.image}`);
    }
  }, [ourteam.image]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedOurTeam((prevOurTeam) => ({
      ...prevOurTeam,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    try {
      const formData = new FormData();
      formData.append("name", updatedOurTeam.name);
      formData.append("description", updatedOurTeam.description);
      if (updatedOurTeam.image) {
        formData.append("image", updatedOurTeam.image);
      }
      //   console.log(formData);

      await axios.post(
        `http://localhost:8000/api/updateourteam/${ourteam.id}`,
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
      reader.readAsDataURL(file);
      setUpdatedOurTeam((prevOurTeam) => ({
        ...prevOurTeam,
        image: file,
      }));
    }

    console.log(file);
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };
  // console.log(previewImage);
  return (
    <Modal show={true} onHide={onClose} size="xl" backdrop="static">
      <Modal.Header closeButton>
        <Modal.Title>Edit OurTeam</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={updatedOurTeam.name}
              onChange={handleChange}
              placeholder="Enter product name"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <textarea
              className="form-control"
              id="description"
              name="description"
              value={updatedOurTeam.description}
              onChange={handleChange}
              rows="3"
              placeholder="Enter product description"
            ></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="image" className="form-label">
              Image
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
                  `http://localhost:8000/images/${ourteam.image}`
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
              `http://localhost:8000/images/${ourteam.image}` ? (
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
              Update
            </Button>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default UpdateOurTeamModal;
