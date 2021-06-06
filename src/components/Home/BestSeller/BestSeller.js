import React from 'react';
import BookCard from '../BookCard';
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import SwiperCore, { Autoplay, Keyboard, Pagination, Navigation } from 'swiper/core';
// install Swiper modules
SwiperCore.use([Autoplay, Keyboard, Pagination, Navigation]);




const BestSeller = ({ books }) => {

    const bestBooks = [];
    for (let i = 4; i < 15; i++) {
        bestBooks.push(books[i]);
    }
    console.log('bestBooks', bestBooks);

    return (
        <section className='container-fluid my-5'>
            <h2>Best Seller </h2>
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
                        "slidesPerView": 4,
                        "spaceBetween": 40
                    },
                    "1024": {
                        "slidesPerView": 5,
                        "spaceBetween": 50
                    }
                }} className="mySwiper"> 
                {
                    bestBooks.length && bestBooks.map( book => {
                        return <SwiperSlide>
                        <BookCard info={book} />
                            
                        </SwiperSlide>

                    })
                }

            </Swiper>

        </section>
    );
};

export default BestSeller;