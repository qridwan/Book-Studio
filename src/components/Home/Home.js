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
  const [search, setSearch] = useState('');
  const [searchData, setSearchData] = useState('');

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

  console.log(props);

  useEffect(() => {
    if (!books.length) {
      props.dispatch(fetchProducts(search));
    }
  }, [books.length, props]);

  useEffect(() => {
    if (books.length) {
      getData();
    }
  }, [offset, books.length]);

  // useEffect(() => {
        
  // }, [setSearch]);

  console.log(search, searchData);
  const handleSubmit = () => {
    try {
      fetch(`https://609cd6ba04bffa001792d638.mockapi.io/books?search=${search}`)
        .then(res => res.json())
        .then(data => {
          setSearchData(data)
          if(data.length === 0){
            alert('Nothing Found, Try again')
          }
        })
        .catch(err => console.log(err));
    } catch (error) {
      alert(error.message);  
    }
    
  }

  return (
    <div className="container">
      <Row className="justify-content-center mt-5">

        <div className="search-bar text-center m-4">
            <input className='p-2 mb-2 form-control' type="text" placeholder="Search" onChange={(e)=>setSearch(e.target.value)}/>
            <button className='btn btn-primary' onClick={() => handleSubmit()}>Search</button>
        </div>

        <div className="search-results">
            {searchData &&
              searchData.map(data => <BookCard info={data} />)
            }
        </div>
        
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
