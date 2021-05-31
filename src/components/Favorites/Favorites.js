import React from "react";
import { Row } from "react-bootstrap";
import { connect } from "react-redux";
import { removeFromFav } from "../../Redux/actions/FavAction";
import FavCard from "./FavCard";

const Favorites = ({ favorites, removeFromFav }) => {
  return (
    <div className="container">
      <Row className="justify-content-center mt-5">
        {favorites.map((book, index) => (
          <FavCard key={index} info={book} removeFromFav={removeFromFav} />
        ))}
      </Row>
    </div>
  );
};
const mapStateToProps = (state) => state;
const mapDispatchToProps = {
  removeFromFav: removeFromFav,
};

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
