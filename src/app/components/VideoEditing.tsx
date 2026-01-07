'use client';
import React, { useState } from 'react';

const videoLinks = [
  'https://www.youtube.com/watch?v=7r7MG_70A0k',
  'https://www.youtube.com/watch?v=Lntj1FyGvkk&t=1s',
  'https://www.youtube.com/watch?v=8de4FX27qbE',
  'https://www.youtube.com/watch?v=mZoQ_Eqbd-o',
  'https://www.youtube.com/watch?v=RAWmRtijkkQ',
  'https://www.youtube.com/watch?v=_bObr--Mg4c',
  'https://www.youtube.com/watch?v=kXedEFh6OWU',
  'https://www.youtube.com/watch?v=aDXb-FrBjPg&t=1s',
  'https://www.youtube.com/watch?v=4WcnfiIxhJ4&t=1s',
];

const getEmbedUrl = (url: string, autoplay = false) => {
  const videoId = url.split('v=')[1]?.split('&')[0];
  const start = url.includes('t=')
    ? `&start=${url.split('t=')[1].replace('s', '')}`
    : '';
  const auto = autoplay ? '&autoplay=1&mute=1' : '';
  return `https://www.youtube.com/embed/${videoId}?rel=0${start}${auto}`;
};

const VideoEditing = () => {
  return (
    <section className="bg-[var(--background-bright)] w-full text-white py-20">
      <h2 className="text-7xl mb-20 text-center font-extrabold">
        Edición de video
      </h2>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-10 place-items-center xl:w-10/12 mx-auto">
        {videoLinks.map((video, index) => (
          <VideoCard key={index} videoUrl={video} />
        ))}
      </div>
    </section>
  );
};

interface VideoCardProps {
  videoUrl: string;
}

const VideoCard = ({ videoUrl }: VideoCardProps) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="relative w-[250px] h-[250px] xl:w-[400px] xl:h-[400px] cursor-pointer overflow-hidden"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {/* Contenedor que escala todo */}
      <div
        className={`w-full h-full transition-transform duration-300 ${
          hover ? 'scale-95' : 'scale-100'
        }`}
      >
        <iframe
          className="w-full h-full"
          src={getEmbedUrl(videoUrl, hover)}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />

        {/* Capa gris encima */}
        <div
          className={`absolute top-0 left-0 w-full h-full bg-gray-400 transition-opacity duration-300 pointer-events-none ${
            hover ? 'opacity-40' : 'opacity-0'
          }`}
        />
      </div>
    </div>
  );
};

export default VideoEditing;
