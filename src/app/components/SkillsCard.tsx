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
    <div
      className="skills-card xl:w-[400px]	xl:h-[488px] w-[240px] h-[293px] md:w-[320px]	md:h-[390px] text-white p-5 text-center flex flex-col items-center justify-center  overflow-hidden bg-cover bg-center relative rounded-md"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      {/* Overlay opcional para que el texto se lea mejor */}
      <div className="absolute inset-0 bg-black/25 z-10"></div>

      <div className="mb-10 z-10">
        <h3 className="font-extrabold xl:text-5xl">{title}</h3>
        <p>{shortDescription}</p>
      </div>
      <button className="z-10 glassmorphism px-2 py-1 rounded ">Ver mas</button>
    </div>
  );
};

export default SkillsCard;
