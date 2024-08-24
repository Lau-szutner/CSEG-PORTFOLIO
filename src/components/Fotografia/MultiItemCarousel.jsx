import { useRef, useState, useEffect } from "react";
import styled from "./carousel.module.css";
import imagePromises from "../../assets/fotografia/index";

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
      <nav>
        <button onClick={() => scrollToCat(catList[0])}>Tom</button>
        <button onClick={() => scrollToCat(catList[5])}>Maru</button>
        <button onClick={() => scrollToCat(catList[9])}>Jellylorum</button>
      </nav>

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
              <img src={cat} alt={`Cat ${index}`} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

/* <img
          id={${styled.btnL}}
          src={arrowLeft}
          alt=""
          className={${styled.ArrowRight}}
          onClick={() => {
            scrollToItem(itemList[0]);
          }}
        />
        <img
          id={${styled.btnR}}
          src={arrowRight}
          alt=""
          className={${styled.ArrowRight}}
          onClick={() => {
            scrollToItem(itemList[5]);
          }}
        /> */
