import styled from "./edicion.module.css";
import VideoComponent from "./videoComponent";
import { videos } from "./videos.js";

export default function Edits() {
  return (
    <>
      <h2 className={`container  ${styled.h2}`}>Edición de video</h2>
      <ul>
        {videos.map((video, index) => (
          <li key={index}>
            <VideoComponent src={video.src} />
          </li>
        ))}
      </ul>

      {/* <VideoComponent links={videos[0].src}></VideoComponent>
      <VideoComponent links={videos[0].src}></VideoComponent> */}
    </>
  );
}

// <iframe width="560" height="315" src="https://www.youtube.com/embed/7r7MG_70A0k?si=_axyiHvFvr-Tzia2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
