import Image from 'next/image';

export default function Header() {
  return (
    <section className="h-screen relative">
      <Image
        src="/header-background.png"
        alt=""
        fill
        style={{ objectFit: 'cover' }}
        className="absolute inset-0 z-0"
      />

      <div className="relative z-10 grid h-full place-content-center text-center text-white gap-3">
        <div className="font-extrabold text-5xl">
          <h1 className="text-5xl">CSEG</h1>
          <h2 className="text-center">Catalina Segalini</h2>
        </div>
        <div className="text-xl grid gap-2">
          <p>Licenciada en Artes Difitales & Tecnica audiovisual</p>
          <p>Edicion de video | Filmmaking | Fotografia</p>
        </div>
      </div>
    </section>
  );
}
