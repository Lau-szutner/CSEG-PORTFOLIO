import styled from "./carousel.module.css";
import { ImgLinks } from "../edicion/videos.js";
import FotosC from "./FotosC.jsx";
import arrowRight from "../../assets/arrowRight.svg";
import arrowLeft from "../../assets/arrowLeft.svg";

import { useRef } from "react";

export default function MultiItemCarousel() {
  const carouselRefR = useRef(null);

  const handleNext = (value) => {
    if (value == 1) {
      carouselRefR.current.scrollLeft += carouselRefR.current.offsetWidth;
    } else if (value == 2) {
      carouselRefR.current.scrollLeft -= carouselRefR.current.offsetWidth;
    }
  };

  return (
    <section className="container-fluid my-5">
      <h2 className={styled.h2}>Fotografía</h2>

      <div className={`${styled.div1}`}>
        <div className={` ${styled.carousel} `} ref={carouselRefR}>
          {ImgLinks.map((ImgLinks, n) => (
            <FotosC src={ImgLinks.src} key={n} />
          ))}
        </div>

        <img
          id={`${styled.btnL}`}
          src={arrowLeft}
          alt=""
          className={`${styled.ArrowRight}`}
          onClick={() => {
            handleNext("2");
          }}
        />
        <img
          id={`${styled.btnR}`}
          src={arrowRight}
          alt=""
          className={`${styled.ArrowRight}`}
          onClick={() => {
            handleNext("1");
          }}
        />
      </div>
    </section>
  );
}
