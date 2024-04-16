import React, { useState, useRef } from "react";
import { Modal, Button } from "react-bootstrap";
import axios from "axios";

const AddOurTeamModal = ({ show, onClose }) => {
  const [ourteamName, setOurTeamName] = useState("");
  const [ourteamPosition, setOurTeamPosition] = useState("");
  const [ourteamDescription, setOurTeamDescription] = useState("");
  const [ourteamImage, setOurTeamImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setOurTeamImage(file);
    setPreviewImage(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", ourteamName);
      formData.append("position", ourteamPosition);
      formData.append("description", ourteamDescription);
      formData.append("image", ourteamImage);
      await axios.post("http://localhost:8000/api/addourteam", formData, {
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
        <Modal.Title>Add OurTeam</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="ourteamName" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="ourteamName"
              value={ourteamName}
              onChange={(e) => setOurTeamName(e.target.value)}
              placeholder="Enter ourteam name"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="ourteamPosition" className="form-label">
              Position
            </label>
            <input
              type="text"
              className="form-control"
              id="ourteamPosition"
              value={ourteamPosition}
              onChange={(e) => setOurTeamPosition(e.target.value)}
              placeholder="Enter ourteam position"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="ourteamDescription" className="form-label">
              Description
            </label>
            <textarea
              className="form-control"
              id="ourteamDescription"
              value={ourteamDescription}
              onChange={(e) => setOurTeamDescription(e.target.value)}
              rows="3"
              placeholder="Enter ourteam description"
            ></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="ourteamImage" className="form-label">
              Image
            </label>
            <input
              type="file"
              className="form-control"
              id="ourteamImage"
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
              Add OurTeam
            </Button>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default AddOurTeamModal;
