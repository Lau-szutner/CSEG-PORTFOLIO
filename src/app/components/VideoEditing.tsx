import React from 'react';

const VideoEditing = () => {
  return (
    <section className="p-10 bg-[var(--background-bright)] h-fit w-full text-white">
      <h2 className="xl:text-7xl text-6xl font-extrabold text-center mb-10">
        Edición de video
      </h2>

      <div className="grid grid-cols-3 place-items-center gap-20 w-9/12 place-self-center">
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard /> <VideoCard />
        <VideoCard />
        <VideoCard />
      </div>
    </section>
  );
};

const VideoCard = () => {
  return (
    <div>
      <iframe
        width="350"
        height="350"
        src="https://www.youtube.com/embed/7r7MG_70A0k"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoEditing;
