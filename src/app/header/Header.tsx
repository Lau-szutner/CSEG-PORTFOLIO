import Image from 'next/image';

export default function Header() {
  return (
    <section className="relative h-screen w-screen">
      <Image
        src="/header-background.png"
        alt=""
        fill
        style={{ objectFit: 'cover' }}
        priority
      />
    </section>
  );
}
