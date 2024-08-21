import styled from "./edicion.module.css";

export default function VideoEmbed({ src }) {
  return (
    <>
      <iframe
        className={`${styled.video1}`}
        width="300"
        height="300"
        src={src}
        title="Video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </>
  );
}
