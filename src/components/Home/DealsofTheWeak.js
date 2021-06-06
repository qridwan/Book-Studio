

import React from 'react';
import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import SwiperCore, { Autoplay, Keyboard, Pagination, Navigation } from 'swiper/core';
// install Swiper modules
SwiperCore.use([Autoplay, Keyboard, Pagination, Navigation]);



const DealofTheWeak = ({ books }) => {


    const bestBooks = [];
    for (let i = 4; i < 15; i++) {
        const book = books[i];
        bestBooks.push(book);

    }
    console.log('bestBooks', bestBooks);

    return (
        <section className='container-fluid my-5'>
            <h2>Deals of The Week </h2>
            <Swiper
                style={{
                    '--swiper-navigation-color': '#ff0000',
                    '--swiper-pagination-color': '#000'
                }}
                slidesPerView={1}
                spaceBetween={10}
                // loop={true}
                keyboard={{
                    "enabled": true
                }}
                autoHeight={true}
                pagination={{
                    "clickable": true
                }}
                navigation={true}
                autoplay={{
                    "delay": 2500,
                    "disableOnInteraction": false
                }}
                lazy={true}
                breakpoints={{
                    "640": {
                        "slidesPerView": 2,
                        "spaceBetween": 20
                    },
                    "768": {
                        "slidesPerView": 3,
                        "spaceBetween": 40
                    },
                    "1024": {
                        "slidesPerView": 4,
                        "spaceBetween": 50
                    }
                }} className="mySwiper">

                {
                    bestBooks.length && bestBooks.map(book => {
                        
                        const { name, book_image, price, id } = book;
                        return <SwiperSlide>
                            <Col md={3} className="mb-3 " >
                                <Card style={{ width: "20rem" }}>
                                    <Card.Img variant="top" src={book_image} width="20rem" />
                                    <Card.Body>
                                        <Card.Title>{name}</Card.Title>
                                        <Card.Text>10% OFF </Card.Text>
                                        <Card.Text> ${price}
                                            <span
                                                style={{ textDecorationLine: 'line-through', textDecorationStyle: 'solid',marginLeft:'1rem' }}>{price-10}
                                            </span>
                                        </Card.Text>
                                        <Button variant="primary">
                                            <Link style={{ textDecoration: "none", color: "white" }} to={`/home/${id}/detail`}>
                                                Details
                                            </Link>
                                        </Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </SwiperSlide>

                    })
                }

            </Swiper>

        </section>
    );
};

export default DealofTheWeak;




