'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import Image from 'next/image';

const upperRow = [
  { src: '/clients/coinbox.png', alt: 'Coinbox' },
  { src: '/clients/buildingC.png', alt: 'Building C' },
  { src: '/clients/heyLogo.png', alt: 'Hey' },
  { src: '/clients/metaMind.png', alt: 'MetaMind' },
  { src: '/clients/joven-inversor.png', alt: 'Joven Inversor' },
  { src: '/clients/tiendacripto.png', alt: 'Tienda Cripto' },
];

const bottomRow = [
  { src: '/clients/dvVickLogo.png', alt: 'DV Vick' },
  { src: '/clients/la-paloma.png', alt: 'La Paloma' },
  { src: '/clients/vanda.png', alt: 'Vanda' },
  { src: '/clients/civic8.png', alt: 'Civic 8' },
  { src: '/clients/adventure-photos.png', alt: 'Adventure Photos' },
  { src: '/clients/tiendacripto.png', alt: 'Tienda Cripto' },
];

export default function MyClients() {
  return (
    <section className="py-20 bg-[var(--background-bright)] overflow-hidden h-fit w-full">
      <h2 className="text-white text-7xl mb-20 text-center font-extrabold">
        Mis Clientes
      </h2>

      {/* FILA SUPERIOR */}
      <div className="mb-12 h-48 w-full">
        <Swiper
          modules={[Autoplay]}
          slidesPerView={5}
          spaceBetween={30}
          autoplay={{ delay: 0, disableOnInteraction: false }}
          speed={8000}
          loop
          observer={true}
          observeParents={true}
          breakpoints={{
            1280: { slidesPerView: 5 },
            1024: { slidesPerView: 4 },
            768: { slidesPerView: 3 },
            320: { slidesPerView: 2 },
          }}
          className="h-full"
        >
          {upperRow.map((brand, i) => (
            <SwiperSlide key={i} className="flex items-center justify-center">
              <div className="relative h-24  md:h-48 flex items-center justify-center">
                <Image
                  src={brand.src}
                  alt={brand.alt}
                  fill
                  className="object-contain"
                  priority={i < 4}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* FILA INFERIOR (dirección contraria) */}
      <div className="h-48 w-full">
        <Swiper
          modules={[Autoplay]}
          slidesPerView={5}
          spaceBetween={30}
          autoplay={{ delay: 0, disableOnInteraction: false }}
          speed={8000}
          loop
          dir="rtl"
          observer={true}
          observeParents={true}
          breakpoints={{
            1280: { slidesPerView: 5 },
            1024: { slidesPerView: 4 },
            768: { slidesPerView: 3 },
            320: { slidesPerView: 2 },
          }}
          className="h-full"
        >
          {bottomRow.map((brand, i) => (
            <SwiperSlide key={i} className="flex items-center justify-center">
              <div className="relative h-24  md:h-48 flex items-center justify-center">
                <Image
                  src={brand.src}
                  alt={brand.alt}
                  fill
                  className="object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
