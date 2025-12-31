'use client';

import Image from 'next/image';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
];

const baseSettings = {
  infinite: true,
  autoplay: true,
  autoplaySpeed: 0,
  speed: 8000,
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
    <section className="py-20 bg-neutral-900 overflow-hidden">
      <h2 className="text-white text-5xl mb-14 text-center font-extrabold">
        Mis Clientes
      </h2>

      {/* FILA SUPERIOR */}
      <Slider {...baseSettings} className="mb-12">
        {upperRow.map((brand, i) => (
          <div key={i} className="px-6">
            <div className="relative h-24 md:h-48 flex items-center justify-center">
              <Image
                src={brand.src}
                alt={brand.alt}
                fill
                className="object-contain"
                priority={i < 4}
              />
            </div>
          </div>
        ))}
      </Slider>

      {/* FILA INFERIOR (dirección contraria) */}
      <Slider {...baseSettings} rtl>
        {bottomRow.map((brand, i) => (
          <div key={i} className="px-6">
            <div className="relative h-24  md:h-48 flex items-center justify-center">
              <Image
                src={brand.src}
                alt={brand.alt}
                fill
                className="object-contain"
              />
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}
