// import { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import Edits from "./components/edicion/Edits";
import MultiItemCarousel from "./components/Fotografia/MultiItemCarousel";
import "./App.css";

function App() {
  window.onload = function () {
    window.scrollTo(0, document.body.scrollHeight);
  };

  return (
    <>
      <Navbar></Navbar>
      <Header></Header>
      <Edits></Edits>
      <MultiItemCarousel></MultiItemCarousel>
    </>
  );
}

export default App;
