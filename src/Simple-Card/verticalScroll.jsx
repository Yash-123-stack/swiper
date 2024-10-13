import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './vertical.css';


// import required modules
import { Pagination } from 'swiper/modules';

export default function Vertical() {
  return (
    <>
      <Swiper
        direction={'vertical'}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>vertical slide1</SwiperSlide>
        <SwiperSlide>vertical Slide 2</SwiperSlide>
        <SwiperSlide>vertical Slide 3</SwiperSlide>
        <SwiperSlide>vertical Slide 4</SwiperSlide>
        <SwiperSlide>vertical Slide 5</SwiperSlide>
        <SwiperSlide>vertical Slide 6</SwiperSlide>
        <SwiperSlide>vertical Slide 7</SwiperSlide>
        <SwiperSlide>vertical Slide 8</SwiperSlide>
        <SwiperSlide>vertical Slide 9</SwiperSlide>
      </Swiper>
    </>
  );
}