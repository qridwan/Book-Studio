import React from "react";
import { Button, Card, Col } from "react-bootstrap";

const FavCard = ({ info, removeFromFav }) => {
  const { img, name, price, favId } = info;
  return (
    <Col md={4} className="mb-3">
      <Card style={{ width: "100%" }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>$ {price}</Card.Text>
          <Button onClick={() => removeFromFav(favId)} variant="primary">
            Remove
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default FavCard;
