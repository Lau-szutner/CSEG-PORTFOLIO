import { useRef, useState, useEffect } from "react";
import styled from "./carousel.module.css";
import imagePromises from "../../assets/fotografia/index";
import arrowLeft from "../../assets/arrowLeft.svg";
import arrowRight from "../../assets/arrowRight.svg";

export default function MultiItemCarousel() {
  const itemsRef = useRef(null);
  const [itemList, setItemlist] = useState([]);

  useEffect(() => {
    imagePromises
      .then((imagesArray) => {
        setItemlist(imagesArray);
      })
      .catch((error) => {
        console.error("Error loading images:", error);
      });
  }, []);

  function scrollTo(item) {
    const map = getMap();
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

  return (
    <section>
      <h2 className={`${styled.h2}`}>Fotografia</h2>
      <div className={`${styled.carousel}`}>
        <ul className={`${styled.ul}`}>
          {itemList.map((item, index) => (
            <li
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
                alt={`Cat ${index}`}
                className={styled.imagenes}
              />
            </li>
          ))}
        </ul>
        <img
          id={`${styled.btnL}`}
          src={arrowLeft}
          alt=""
          className={`${styled.ArrowRight}`}
          onClick={() => scrollTo(itemList[10])}
        />
        <img
          id={`${styled.btnR}`}
          src={arrowRight}
          alt=""
          className={`${styled.ArrowRight}`}
          onClick={() => scrollTo(itemList[6])}
        />
      </div>
    </section>
  );
}
