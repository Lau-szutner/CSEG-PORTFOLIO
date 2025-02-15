import { useRef, useState, useEffect } from 'react';
import styled from './carousel.module.css';
import arrowLeft from '../../assets/arrowLeft.svg';
import arrowRight from '../../assets/arrowRight.svg';

export default function MultiItemCarousel({ images, children }) {
  const itemsRef = useRef(null);
  const [itemList, setItemList] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length > 0) {
      setItemList(images); // Asegúrate de que las imágenes estén en el estado
    }
  }, [images]);

  // Asignación correcta de imágenes desde el public
  const loadedImages = [
    '/fotografia/fotografia-01.jpg',
    '/fotografia/fotografia-02.jpg',
    '/fotografia/fotografia-03.jpg',
    // y así sucesivamente...
  ];

  function scrollTo(index) {
    const map = getMap();
    const node = map.get(itemList[index]);
    if (node) {
      node.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'center',
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
              <div className={styled.imageWrapper}>
                <img
                  src={item} // Ruta de la imagen
                  alt={`Imagen ${index + 1}`}
                  className={styled.imagenes}
                />
              </div>
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
