import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { removeFromFav } from "../../Redux/actions/FavAction";
import FavCard from "./FavCard";

const Favorites = ({ favorites, removeFromFav }) => {
  return (
    <div className="container">
      {favorites.length ? (
        <Row className="justify-content-center mt-5">
          {favorites.map((book, index) => (
            <FavCard key={index} info={book} removeFromFav={removeFromFav} />
          ))}
        </Row>
      ) : (
        <Row className="justify-content-center mt-5">
          <Col md={6} className="text-center">
            {" "}
            <h2> Favorite Items is Empty! </h2>{" "}
            <Button> <Link to="/home" className="no-underline text-light">Go Back </Link> </Button>
          </Col>
        </Row>
      )}
    </div>
  );
};
const mapStateToProps = (state) => state;
const mapDispatchToProps = {
  removeFromFav: removeFromFav,
};

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);

