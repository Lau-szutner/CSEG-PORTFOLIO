import { useRef, useState, useEffect } from "react";
import styled from "./carousel.module.css";
import imagePromises from "../../assets/fotografia/index";
import arrowLeft from "../../assets/arrowLeft.svg";
import arrowRight from "../../assets/arrowRight.svg";
export default function CatFriends() {
  const itemsRef = useRef(null);
  const [catList, setCatList] = useState([]);

  function scrollToCat(cat) {
    const map = getMap();
    const node = map.get(cat);
    if (node) {
      node.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    }
  }

  useEffect(() => {
    imagePromises
      .then((imagesArray) => {
        setCatList(imagesArray);
      })
      .catch((error) => {
        console.error("Error loading images:", error);
      });
  }, []);

  function getMap() {
    if (!itemsRef.current) {
      itemsRef.current = new Map();
    }
    return itemsRef.current;
  }

  return (
    <>
      <h2 className={`${styled.h2}`}>Fotografia</h2>
      <div className={`${styled.carousel}`}>
        <ul className={`${styled.ul}`}>
          {catList.map((cat, index) => (
            <li
              key={index}
              ref={(node) => {
                const map = getMap();
                if (node) {
                  map.set(cat, node);
                } else {
                  map.delete(cat);
                }
              }}
            >
              <img src={cat} alt={`Cat ${index}`} className={styled.imagenes} />
            </li>
          ))}
        </ul>
        <img
          id={`${styled.btnL}`}
          src={arrowLeft}
          alt=""
          className={`${styled.ArrowRight}`}
          onClick={() => scrollToCat(catList[10])}
        />
        <img
          id={`${styled.btnR}`}
          src={arrowRight}
          alt=""
          className={`${styled.ArrowRight}`}
          onClick={() => scrollToCat(catList[6])}
        />
      </div>
    </>
  );
}

/*
 */
