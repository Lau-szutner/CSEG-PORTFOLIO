import styled from "./edicion.module.css";
import VideoEmbed from "./VideoEmbed.jsx";
import { videos } from "./videos.js";

export default function Edits() {
  return (
    <section className="container my-5">
      <h2 className={`${styled.h2}`}>Edición de video</h2>
      <div className={`container ${styled.video}`}>
        {videos.map((video, n) => (
          <VideoEmbed src={video.src} key={n} />
        ))}
      </div>
    </section>
  );
}

// <iframe width="560" height="315" src="https://www.youtube.com/embed/7r7MG_70A0k?si=_axyiHvFvr-Tzia2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
