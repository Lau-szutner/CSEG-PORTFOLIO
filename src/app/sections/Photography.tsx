'use client';
import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const slides = [1, 2, 3, 4, 5, 6];

const Photography = () => {
  return (
    <section
      className="bg-[var(--background)] h-fit w-full text-white p-20 "
      id="Fotografía"
    >
      <h2 className="text-white text-7xl mb-20 text-center font-extrabold">
        Fotografia
      </h2>

      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {slides.map((photo, i) => (
          <SwiperSlide key={i}>
            <Image
              src="/photography/photograpy-1.png"
              width={500}
              height={600}
              alt="Picture of the author"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Photography;
