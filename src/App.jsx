import { useState, useEffect } from "react";
import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import Edits from "./components/edicion/Edits";
import MultiItemCarousel from "./components/Fotografia/MultiItemCarousel";
import { imagenesFotografia } from "./assets/fotografia/imageLoader";
import "./App.css";

function App() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    imagenesFotografia
      .then((loadedImages) => {
        setImages(loadedImages);
      })
      .catch((error) => {
        console.error("Error loading images:", error);
      });
  }, []);

  // window.onload = function () {
  //   window.scrollTo(0, document.body.scrollHeight);
  // };

  return (
    <>
      <Navbar />
      <Header />
      <Edits />
      <MultiItemCarousel images={images}>Fotografía</MultiItemCarousel>
      <MultiItemCarousel images={images}>Fotografía</MultiItemCarousel>
    </>
  );
}

export default App;
