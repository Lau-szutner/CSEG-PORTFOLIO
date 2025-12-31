'use client';

import Image from 'next/image';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const upperRow = [
  { src: '/clients/coinbox.png', alt: 'Coinbox' },
  { src: '/clients/buildingC.png', alt: 'Building C' },
  { src: '/clients/heyLogo.png', alt: 'hey' },
  { src: '/clients/metaMind.png', alt: 'MetaMind' },
  { src: '/clients/joven-inversor.png', alt: 'joven inversor' },
  { src: '/clients/tiendacripto.png', alt: 'tiendacripto' },
];

const baseSettings = {
  infinite: true,
  autoplay: true,
  autoplaySpeed: 0,
  speed: 6000,
  cssEase: 'linear',
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: false,
  dots: false,
  pauseOnHover: false,
  pauseOnFocus: false,
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 3 } },
    { breakpoint: 640, settings: { slidesToShow: 2 } },
  ],
};

export default function MyClients() {
  return (
    <section className="py-16 bg-neutral-900 overflow-hidden">
      <h2 className="text-white text-5xl mb-12 text-center">Mis Clientes</h2>

      {/* FILA SUPERIOR */}
      <Slider {...baseSettings} className="mb-10">
        {upperRow.map((brand, i) => (
          <div key={i} className="px-6">
            <div className="flex items-center justify-center h-fit">
              <Image
                src={brand.src}
                alt={brand.alt}
                width={160}
                height={160}
                className="object-contain"
                priority={i < 4}
              />
            </div>
          </div>
        ))}
      </Slider>

      {/* FILA INFERIOR (DIRECCIÓN CONTRARIA) */}
      {/* <Slider {...baseSettings} rtl>
        {brands.map((brand, i) => (
          <div key={i} className="px-6">
            <div className="h-24 flex items-center justify-center bg-white rounded-md">
              <Image
                src={brand.src}
                alt={brand.alt}
                width={160}
                height={80}
                className="object-contain"
              />
            </div>
          </div>
        ))}
      </Slider> */}
    </section>
  );
}
