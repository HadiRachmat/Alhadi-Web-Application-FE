// import { pesantrenData } from '@/data/pesantren-data';
import HomeHero from '@/components/home/HomeHero';
// import HomeClient from '@/components/home/HomeClient';
import Navbar from '@/components/navbar/Navbar';
import Feature from '@/components/home/Feature';

export default function HomePage() {
  return (
    <main className="pb-12">
      <Navbar />
      <HomeHero />
      <Feature />
      {/* <HomeClient data={pesantrenData} /> */}
    </main>
  );
}
