import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './effective.css';

// import required modules
import { EffectFade, Navigation, Pagination } from 'swiper/modules';

export default function Effective() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={'fade'}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="/effective/biryani.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/effective/iceCream.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/effective/muffin.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/effective/pizza.jpeg" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
