// Import Swiper core and required modules
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Swiper styles
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation } from 'swiper/modules';

// Sample card component styles (can be customized)
const cardStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '200px',
  backgroundColor: '#f3f4f6',
  borderRadius: '10px',
  fontSize: '20px',
  fontWeight: 'bold',
  color: '#333',
  backgroundColor: 'red',
  margin: '10px'
};

function CardSwiper() {
  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={1}
      pagination={{ clickable: true }}
      navigation={true}
      modules={[Pagination, Navigation]}
      style={{ width: '80%', height: '300px' }} // Customize Swiper container size
    >
      {/* Card 1 */}
      <SwiperSlide>
        <div style={cardStyle}>Card 1.</div>
      </SwiperSlide>
      {/* Card 2 */}
      <SwiperSlide>
        <div style={cardStyle}>Card 2</div>
      </SwiperSlide>
      {/* Card 3 */}
      <SwiperSlide>
        <div style={cardStyle}>Card 3</div>
      </SwiperSlide>
    </Swiper>
  );
}

export default CardSwiper;
