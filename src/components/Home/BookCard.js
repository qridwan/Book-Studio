import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const BookCard = ({ info }) => {
  const { name, book_image, price, id } = info;
  console.log(info);
  return (
    <Col md={3} className="mb-3">
      <Card style={{ width: "20rem" }}>
        <Card.Img variant="top" src={book_image} width="20rem" />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>$ {price}</Card.Text>
          <Button variant="primary">
            <Link style={{ textDecoration: "none", color: "white" }} to={`/home/${id}/detail`}>
              Details
            </Link>
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default BookCard;
