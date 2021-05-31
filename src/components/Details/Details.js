import React from "react";
import { Button, Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { connect } from "react-redux";
import { useParams } from "react-router";
import { addToFav } from "../../Redux/actions/FavAction";

const Details = (props) => {
console.log("🚀 ~ file: Details.js ~ line 7 ~ Details ~ props", props)
    const { books, addToFav } = props;
  const { id } = useParams();
  const clickedItem = books.find((book) => book.id === id);
  const { price, book_image, name, book_author } = clickedItem;
  return (
    <div className="d-flex justify-content-center mt-5">
      <Card style={{ width: "25rem" }}>
        <Card.Img variant="top" src={book_image} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>Price: {price}</ListGroupItem>
          <ListGroupItem>Author: {book_author}</ListGroupItem>
        </ListGroup>
        <Card.Body>
          <Button onClick={() => {addToFav(id, book_image, price, name)}}>Add to Favorite</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

const mapStateToProps = (state) => state;
const mapDispatchToProps = {
    addToFav: addToFav,
  };
export default connect(mapStateToProps, mapDispatchToProps)(Details);
