'use client';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

const slides = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

const Photography = () => {
  return (
    <section
      className="bg-[var(--background)] py-20 px-4 md:px-20 text-white"
      id="Fotografía"
    >
      <h2 className="text-5xl md:text-7xl mb-12 text-center font-extrabold">
        Fotografía
      </h2>

      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1} // Default for mobile
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="pb-12" // Space for pagination bullets
      >
        {slides.map((_, i) => (
          <SwiperSlide key={i}>
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg">
              <Image
                src={`/photography/photo-${i + 1}.jpg`}
                alt={`Gallery image ${i + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Photography;
