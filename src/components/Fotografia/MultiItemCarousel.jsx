import { useRef, useState } from "react";
import styled from "./carousel.module.css";

export default function MultiItemCarousel() {
  const itemsRef = useRef(null);
  const [itemList, setItemList] = useState(setupItemList);

  function scrollToItem(cat) {
    const map = getMap();
    const node = map.get(cat);
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

  return (
    <>
      <nav>
        <button onClick={() => scrollToItem(itemList[0])}>Tom</button>
        <button onClick={() => scrollToItem(itemList[5])}>Maru</button>
        <button onClick={() => scrollToItem(itemList[9])}>Jellylorum</button>
      </nav>
      <div className={`${styled.carousel}`}>
        <ul className={`${styled.ul}`}>
          {itemList.map((cat) => (
            <li
              className={`${styled.ImagenesComponent}`}
              key={cat}
              ref={(node) => {
                const map = getMap();
                if (node) {
                  map.set(cat, node);
                } else {
                  map.delete(cat);
                }
              }}
            >
              <img src={cat} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

function setupItemList() {
  const itemList = [];
  for (let i = 0; i < 10; i++) {
    itemList.push("https://picsum.photos/400/600?random=${i}" + i);
  }

  return itemList;
}

{
  /* <img
          id={`${styled.btnL}`}
          src={arrowLeft}
          alt=""
          className={`${styled.ArrowRight}`}
          onClick={() => {
            scrollToItem(itemList[0]);
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
        /> */
}
