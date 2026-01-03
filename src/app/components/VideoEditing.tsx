import React from 'react';

const VideoEditing = () => {
  return (
    <section className="bg-[var(--background-bright)] h-fit w-full text-white py-20">
      <h2 className="text-white text-7xl mb-20 text-center font-extrabold">
        Edición de video
      </h2>
      <div className="grid grid-cols-1 xl:grid-cols-3 place-items-center gap-20 xl:w-9/12 w-full place-self-center">
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
      </div>
    </section>
  );
};

const VideoCard = () => {
  return (
    <div className="w-[250px] h-[250px] xl:w-[400px] xl:h-[400px]">
      <iframe
        className="w-full h-full"
        src="https://www.youtube.com/embed/7r7MG_70A0k"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  );
};

export default VideoEditing;
