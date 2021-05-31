import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Row } from "react-bootstrap";
import ReactPaginate from "react-paginate";
import { connect } from "react-redux";
import { fetchProducts } from "../../Redux/actions/FavAction";
import BookCard from "./BookCard";

const Home = (props) => {
  const { books } = props;
  const [offset, setOffset] = useState(0);
  const [data, setData] = useState([]);
  const [perPage] = useState(10);
  const [pageCount, setPageCount] = useState(0);

  const getData = () => {
    const slice = books.slice(offset, offset + perPage);
    const postData = slice.map((book, index) => (
      <BookCard key={index} info={book} />
    ));
    setData(postData);
    setPageCount(Math.ceil(books.length / perPage));
  };

  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    setOffset(selectedPage + 1);
  };

  useEffect(() => {
    if (!books.length) {
      props.dispatch(fetchProducts());
    }
  }, [books.length, props]);

  useEffect(() => {
    if (books.length) {
      getData();
    }
  }, [offset, books.length]);

  return (
    <div className="container">
      <Row className="justify-content-center mt-5">
        
        <ReactPaginate
          previousLabel={"prev"}
          nextLabel={"next"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"}
        />
        {data}
      </Row>
    </div>
  );
};

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(Home);
