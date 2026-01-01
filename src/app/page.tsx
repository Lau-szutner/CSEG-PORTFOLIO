import Header from '@/app/components/Header';
import Biography from '@/app/components/Biography';
import MyClients from '@/app/components/MyClients';
import SkillsCard from './components/SkillsCard';

export default function Home() {
  return (
    <>
      {/* <Header></Header> */}
      {/* <Biography /> */}
      <MyClients />
      <div className="p-5 gap-5 flex flex-col items-center justify-center md:flex-row ">
        <SkillsCard
          title="Fotografia"
          shortDescription="Retrato, paisajes, 
        arquitectura, deportiva"
          backgroundUrl="fotografia"
        />

        <SkillsCard
          title="Edición"
          shortDescription="Retrato, paisajes, 
        arquitectura, deportiva"
          backgroundUrl="edicion"
        />
        <SkillsCard
          title="Fotografia"
          shortDescription="Retrato, paisajes, 
        arquitectura, deportiva"
          backgroundUrl="creator"
        />
      </div>
    </>
  );
}
