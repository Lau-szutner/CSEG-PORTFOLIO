import styled from "./edicion.module.css";

export default function VideoComponent({ src }) {
  return (
    <>
      <iframe src={src} className={styled.video}></iframe>
    </>
  );
}
