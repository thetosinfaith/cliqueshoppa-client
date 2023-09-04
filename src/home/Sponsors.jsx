import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';

const sponsorList = [
    {
    imgUrl: "/src/assets/images/sponsor/01.png",
    },
    {
    imgUrl: "/src/assets/images/sponsor/02.png",
    },
    {
    imgUrl: "/src/assets/images/sponsor/03.png",
    },
    {
    imgUrl: "/src/assets/images/sponsor/04.png",
    },
    {
    imgUrl: "/src/assets/images/sponsor/05.png",
    },
    {
    imgUrl: "/src/assets/images/sponsor/06.png",
    },
    ];

const Sponsors = () => {
  return (
    <div className='sponsor-section section-bg'>
        <div className='container'>
            <div className='section-wrapper'>
                <div className='sponsor-slider'>
                <Swiper
                slidesPerView={1}        
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}

                breakpoints={{
                640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                    },

                768: {
                    slidesPerView: 4,
                    spaceBetween: 40,
                    },

                    1024: {
                    slidesPerView: 5,
                    spaceBetween: 50,
                    },
                }}
        
                modules={[Pagination]}        
                className="mySwiper">        
                <SwiperSlide>Slide 1</SwiperSlide>        
                <SwiperSlide>Slide 2</SwiperSlide>        
                <SwiperSlide>Slide 3</SwiperSlide>        
                <SwiperSlide>Slide 4</SwiperSlide>        
                <SwiperSlide>Slide 5</SwiperSlide>        
                <SwiperSlide>Slide 6</SwiperSlide>        
                <SwiperSlide>Slide 7</SwiperSlide>        
                <SwiperSlide>Slide 8</SwiperSlide>        
                <SwiperSlide>Slide 9</SwiperSlide>

                </Swiper>

                </div>

            </div>

        </div>
    </div>
  )
}

export default Sponsors