'use client';
import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

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
        spaceBetween={20}
        slidesPerView={3}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        // modules={[]}
        className=""
      >
        {slides.map((photo, i) => (
          <SwiperSlide key={i} className="flex items-center justify-center">
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
