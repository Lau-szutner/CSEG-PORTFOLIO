import styled from "./carousel.module.css";

export default function FotosC({ src }) {
  return (
    <>
      <img
        src={src}
        alt=""
        className={`${styled.ImagenesComponent} ${styled.FOTO}`}
      />
    </>
  );
}
