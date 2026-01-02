import Header from '@/app/components/Header';
import Biography from '@/app/components/Biography';
import MyClients from '@/app/components/MyClients';
import VideoEditing from '@/app/components/VideoEditing';
import SkillsCard from './components/SkillsCard';

export default function Home() {
  return (
    <>
      <Header></Header>
      <Biography />
      <MyClients />
      <section className="p-5 gap-5 flex flex-col items-center justify-center md:flex-row ">
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
      </section>
      <VideoEditing />
    </>
  );
}
