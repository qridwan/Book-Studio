import React from "react";
import { useEffect } from "react";
import { Row } from "react-bootstrap";
import { connect } from "react-redux";
import { fetchProducts } from "../../Redux/actions/FavAction";
import BookCard from "./BookCard";

const Home = (props) => {
  useEffect(() => {
    if (!books.length) {
      props.dispatch(fetchProducts());
    }
  }, []);
  const { books } = props;
  console.log("🚀 ~ file: Home.js ~ line 11 ~ Home ~ state", props);
  return (
    <div className="container">
      <Row>
        {books.map((book, index) => (
          <BookCard key={index} info={book} />
        ))}
      </Row>
    </div>
  );
};

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(Home);
