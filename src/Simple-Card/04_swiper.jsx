import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './coverflow.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

export default function Coverflow() {
  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="/coverflow/kajukatli.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/coverflow/pam.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/coverflow/makhnidaal.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/coverflow/rasgulla.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/coverflow/baskinRobin.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/coverflow/mithai.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/coverflow/mcdonalds.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/coverflow/semiPizza.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/coverflow/Thali.jpeg" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}