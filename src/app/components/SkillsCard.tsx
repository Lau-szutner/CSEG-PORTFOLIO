interface SkillsCardProps {
  title: string;
  shortDescription: string;
  backgroundUrl: string;
}

const SkillsCard = ({
  title,
  shortDescription,
  backgroundUrl,
}: SkillsCardProps) => {
  const imageUrl = `./Skills/${backgroundUrl}.png`; // Puede venir por props

  return (
    <section>
      <div
        className="skills-card xl:w-[400px]	xl:h-[488px] md:w-[320px]	md:h-[390px] w-[320px] h-[391px] text-white p-5 text-center flex flex-col items-center justify-center  overflow-hidden bg-cover bg-center relative rounded-md hover:scale-105 duration-150"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        {/* Overlay opcional para que el texto se lea mejor */}
        <div className="absolute inset-0 bg-black/25 z-10"></div>

        <div className="mb-10 z-10">
          <h3 className="font-extrabold xl:text-5xl text-4xl">{title}</h3>
          <p>{shortDescription}</p>
        </div>
        <button
          className="
  group relative z-10 
  px-8 py-3 
  rounded-2xl 
  bg-white/5 backdrop-blur-md 
  border border-white/10 
  text-white/80 text-sm font-light tracking-[0.15em] uppercase 
  transition-all duration-500 ease-in-out 
  
  /* Efectos de Hover mejorados */
  hover:bg-white/10 
  hover:border-white/30 
  hover:text-white 
  hover:shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]
  hover:-translate-y-0.5
  active:scale-95
  cursor-pointer
"
        >
          {/* Reflejo de luz interior (Efecto de brillo en la esquina) */}
          <span
            className="
    absolute inset-0 rounded-2xl 
    bg-gradient-to-br from-white/20 via-transparent to-transparent 
    opacity-0 group-hover:opacity-100 
    transition-opacity duration-500
  "
          ></span>

          <span className="relative">Ver más</span>
        </button>
      </div>
    </section>
  );
};

export default SkillsCard;
