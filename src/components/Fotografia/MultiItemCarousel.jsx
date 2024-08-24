import styled from "./carousel.module.css";
import { ImgLinks } from "../edicion/videos.js";
import FotosC from "./FotosC.jsx";
import arrowRight from "../../assets/arrowRight.svg";
import arrowLeft from "../../assets/arrowLeft.svg";
import { useRef, useState } from "react";

export default function MultiItemCarousel() {
  const itemsRef = useRef(null);
  const [itemList, setItemList] = useState(setupItemList);

  function scrollToItem(item) {
    const map = getMap();
    const node = map.get(item);
    node.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }

  function getMap() {
    if (!itemsRef.current) {
      // Initialize the Map on first usage.
      itemsRef.current = new Map();
    }
    return itemsRef.current;
  }

  // ---------

  return (
    <section className="container-fluid my-5">
      <h2 className={styled.h2}>Fotografía</h2>

      {/* <div className={`${styled.div1}`}> */}
      <ul>
        {itemList.map((item) => (
          <li
            key={item}
            ref={(node) => {
              const map = getMap();
              if (node) {
                map.set(item, node);
              } else {
                map.delete(item);
              }
            }}
          >
            <img src={item} />
          </li>
        ))}
      </ul>
      <img
        id={`${styled.btnL}`}
        src={arrowLeft}
        alt=""
        className={`${styled.ArrowRight}`}
        onClick={() => {
          scrollToItem(itemList[1]);
        }}
      />
      <img
        id={`${styled.btnR}`}
        src={arrowRight}
        alt=""
        className={`${styled.ArrowRight}`}
        onClick={() => {
          scrollToItem(itemList[5]);
        }}
      />
      {/* </div> */}
    </section>
  );
  function setupItemList() {
    const itemList = [];
    for (let i = 0; i < 10; i++) {
      itemList.push(`${ImgLinks.src}` + i);
    }

    return itemList;
  }
}
