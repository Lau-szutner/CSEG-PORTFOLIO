import styled from "./edicion.module.css";

export default function VideoEmbed({ src }) {
  return (
    <>
      <iframe
        className={`${styled.video1}`}
        width="400"
        height="400"
        src={src}
        title="Video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </>
  );
}
