import { useRef, useState, useEffect } from "react";
import styled from "./carousel.module.css";
import arrowLeft from "../../assets/arrowLeft.svg";
import arrowRight from "../../assets/arrowRight.svg";

export default function MultiItemCarousel({ images, children }) {
  const itemsRef = useRef(null);
  const [itemList, setItemList] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images) {
      // Aquí simplemente asignamos el array de imágenes a itemList
      setItemList(images);
    }
  }, [images]);

  function scrollTo(index) {
    const map = getMap();
    const item = itemList[index];
    const node = map.get(item);
    if (node) {
      node.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    }
  }

  function getMap() {
    if (!itemsRef.current) {
      itemsRef.current = new Map();
    }
    return itemsRef.current;
  }

  function handleNext() {
    const newIndex = (currentIndex + 1) % itemList.length;
    setCurrentIndex(newIndex);
    scrollTo(newIndex);
  }

  function handlePrev() {
    const newIndex = (currentIndex - 1 + itemList.length) % itemList.length;
    setCurrentIndex(newIndex);
    scrollTo(newIndex);
  }

  return (
    <section className={styled.carouselContainer}>
      <h2 className={styled.h2}>{children}</h2>
      <div className={styled.carousel}>
        <ul className={styled.ul}>
          {itemList.map((item, index) => (
            <li
              className={styled.imageContainer}
              key={index}
              ref={(node) => {
                const map = getMap();
                if (node) {
                  map.set(item, node);
                } else {
                  map.delete(item);
                }
              }}
            >
              <img
                src={item}
                alt={`Image ${index}`}
                className={styled.imagenes}
              />
            </li>
          ))}
        </ul>
        <img
          id={styled.btnR}
          src={arrowRight}
          alt="Next"
          className={styled.arrow}
          onClick={handleNext}
        />
        <img
          id={styled.btnL}
          src={arrowLeft}
          alt="Previous"
          className={styled.arrow}
          onClick={handlePrev}
        />
      </div>
    </section>
  );
}
