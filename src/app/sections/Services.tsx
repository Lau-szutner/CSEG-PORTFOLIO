import SkillsCard from '@/app/components/SkillsCard';

const Services = () => {
  return (
    <section className="h-fit w-full text-white text-center py-20">
      <h2 className="text-white text-7xl mb-20 text-center font-extrabold">
        Servicios
      </h2>
      <div className="p-5 gap-5 flex flex-col items-center justify-center md:flex-row ">
        <SkillsCard
          title="Fotografia"
          shortDescription="Retrato, paisajes, 
        arquitectura, deportiva"
          backgroundUrl="fotografia"
        />
        <SkillsCard
          title="Edición"
          shortDescription="Video, color, ritmo, postproducción"
          backgroundUrl="edicion"
        />
        <SkillsCard
          title="Content Creator"
          shortDescription="Redes sociales, shorts, branding"
          backgroundUrl="creator"
        />
      </div>
    </section>
  );
};

export default Services;
