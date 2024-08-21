export default function VideoComponent({ src }) {
  return (
    <>
      <iframe
        width="560"
        height="315"
        src={src}
        title="YouTube video player"
        frameBorder="0"
      ></iframe>
    </>
  );
}
