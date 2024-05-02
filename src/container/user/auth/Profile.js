import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import HeaderUser from "../../../components/user/HeaderUser";
import FooterUser from "../../../components/user/FooterUser";

const Profile = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [avatar, setAvatar] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleAvatarChange = (e) => {
    setAvatar(e.target.files[0]);
  };

  return (
    <>
      <HeaderUser />
      <Container className="mt-5" style={{ minHeight: "100vh" }}>
        <Row className="justify-content-center">
          <Col md={6}>
            <h2 className="text-center mb-4">Edit Profile</h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="formBasicAvatar">
                <Form.Label>Avatar</Form.Label>
                <Form.Control
                  type="file"
                  accept="image/*"
                  onChange={handleAvatarChange}
                />
              </Form.Group>

              <Button variant="primary" type="submit" className="w-100 mt-3">
                Save Changes
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
      <FooterUser />
    </>
  );
};

export default Profile;
