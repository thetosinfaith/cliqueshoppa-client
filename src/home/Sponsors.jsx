import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';

import sponsor01 from '../assets/images/sponsor/01.png';
import sponsor02 from '../assets/images/sponsor/02.png';
import sponsor03 from '../assets/images/sponsor/03.png';
import sponsor04 from '../assets/images/sponsor/04.png';
import sponsor05 from '../assets/images/sponsor/05.png';
import sponsor06 from '../assets/images/sponsor/06.png';

const sponsorList = [
    {
        imgUrl: sponsor01,
    },
    {
        imgUrl: sponsor02,
    },
    {
        imgUrl: sponsor03,
    },
    {
        imgUrl: sponsor04,
    },
    {
        imgUrl: sponsor05,
    },
    {
        imgUrl: sponsor06,
    },
];

const Sponsors = () => {
    return (
        <div className='sponsor-section secion-bg' style={{backgroundColor: '#690896 '}}>
            <div className='container'>
                <div className='section-wrapper'>
                    <div className='sponsor-slider'>
                        <Swiper
                            slidesPerView={2}
                            spaceBetween={20}
                            autoplay={{
                                delay: 2000,
                                disableOnInteraction: false,
                            }}
                            breakpoints={{
                                640: {
                                    slidesPerView: 1,
                                    spaceBetween: 20,
                                },
                                768: {
                                    slidesPerView: 3,
                                    spaceBetween: 40,
                                },
                                1024: {
                                    slidesPerView: 5,
                                    spaceBetween: 50,
                                },
                            }}
                            modules={[Autoplay]}
                            className="mySwiper"
                        >
                            {sponsorList.map((value, index) => (
                                <SwiperSlide key={index}>
                                    <div className='sponsor-item'>
                                        <div className='sponsor-thumb'>
                                            <img src={value.imgUrl} alt="" />
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sponsors;
