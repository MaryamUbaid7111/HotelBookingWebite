import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import './styles.css';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
const Slider = () => {
  return (
    <div className='relative z-10 bg-red-600 w-full h-screen '>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="relative w-full h-full ">
            <img src="/e1.jpg" alt="Slide 1" className="object-cover w-full h-full" />
            <div className="absolute inset-0 flex flex-col justify-center items-start text-white px-40">
             <h1 className="text-7xl font-bold mb-2">HURRY!</h1>
               <h1 className="text-7xl font-bold  w-[340px] text-start px-3">Get The Best Villa In Town</h1>
             </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-full">
            <img src="/e1.jpg" alt="Slide 2" className="object-cover w-full h-full" />
            <div className="absolute inset-0 flex flex-col justify-center items-start text-white px-40">
             <h1 className="text-6xl font-bold mb-2">Get Ready!</h1>
               <h1 className="text-6xl font-bold  w-[280px] text-start px-3">Get The Best Villa In Town</h1>
             </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-full">
            <img src="/e3.jpg" alt="Slide 3" className="object-cover w-full h-full" />
            <div className="absolute inset-0 flex flex-col justify-center items-start text-white px-40">
             <h1 className="text-6xl font-bold mb-2">Get Ready!</h1>
               <h1 className="text-6xl font-bold  w-[280px] text-start px-3">Get The Best Villa In Town</h1>
             </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
