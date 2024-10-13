import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';


// import required modules
import { Scrollbar } from 'swiper/modules';

export default function Scroller() {
  return (
    <>
      <Swiper
        scrollbar={{
          hide: true,
        }}
        modules={[Scrollbar]}
        className="mySwiper"
      >
        <SwiperSlide>Horizontal Slide 1</SwiperSlide>
        <SwiperSlide>Horizontal Slide 2</SwiperSlide>
        <SwiperSlide>Horizontal Slide 3</SwiperSlide>
        <SwiperSlide>Horizontal Slide 4</SwiperSlide>
        <SwiperSlide>Horizontal Slide 5</SwiperSlide>
        <SwiperSlide>Horizontal Slide 6</SwiperSlide>
        <SwiperSlide>Horizontal Slide 7</SwiperSlide>
        <SwiperSlide>Horizontal Slide 8</SwiperSlide>
        <SwiperSlide>Horizontal Slide 9</SwiperSlide>
      </Swiper>
    </>
  );
}
