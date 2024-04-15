import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import HeaderUser from "../../components/user/HeaderUser";

const NotFoundPage = () => {
  return (
    <>
      <HeaderUser />
      <Container className="mt-5">
        <Row className="justify-content-center">
          <Col md={8} className="text-center">
            <h1 className="display-1">404</h1>
            <h2>Page Not Found</h2>
            <p>
              The page you are looking for might have been removed, had its name
              changed, or is temporarily unavailable.
            </p>
            <Button variant="primary" as={Link} to="/" className="mt-3">
              Back to Home
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default NotFoundPage;
