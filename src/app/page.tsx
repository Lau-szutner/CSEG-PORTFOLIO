import Services from '@/app/sections/Services';

import Header from '@/app/components/Header';
import Biography from '@/app/components/Biography';
import MyClients from '@/app/components/MyClients';
import VideoEditing from '@/app/components/VideoEditing';
// import VideoEditing from '@/app/components/VideoEditing';
import SkillsCard from './components/SkillsCard';

import Photography from './sections/Photography';
export default function Home() {
  return (
    <>
      <Header></Header>
      <Biography />
      <MyClients />
      <Services />
      <VideoEditing />
      {/* <Photography /> */}
    </>
  );
}
