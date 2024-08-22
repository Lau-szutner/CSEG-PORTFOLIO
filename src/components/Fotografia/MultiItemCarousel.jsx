import styled from "./carousel.module.css";
import { ImgLinks } from "../edicion/videos.js";
import FotosC from "./FotosC.jsx";
import arrowRight from "../../assets/arrowRight.svg";
import { useRef } from "react";

export default function MultiItemCarousel() {
  const carouselRef = useRef(null);

  const handleNext = () => {
    if (carouselRef.current) {
      // Mueve el carrusel hacia la derecha
      carouselRef.current.scrollLeft += carouselRef.current.offsetWidth;
    }
  };

  return (
    <section className="container-fluid my-5">
      <h2 className={styled.h2}>Fotografía</h2>
      <div className={` ${styled.carousel} `} ref={carouselRef}>
        {ImgLinks.map((ImgLinks, n) => (
          <FotosC src={ImgLinks.src} key={n} />
        ))}
        <img
          src={arrowRight}
          alt=""
          className={`${styled.ArrowRight}`}
          onClick={() => {
            handleNext();
          }}
        />
      </div>
    </section>
  );
}
