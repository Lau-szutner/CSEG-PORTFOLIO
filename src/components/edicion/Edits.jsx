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
