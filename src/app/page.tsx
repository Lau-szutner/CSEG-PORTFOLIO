import Header from '@/app/components/Header';
import Biography from '@/app/components/Biography';
import MyClients from '@/app/components/MyClients';
export default function Home() {
  return (
    <>
      <Header></Header>
      <Biography />
      <MyClients />
    </>
  );
}
