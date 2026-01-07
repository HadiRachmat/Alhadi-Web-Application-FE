// import { pesantrenData } from '@/data/pesantren-data';
import HomeHero from '@/components/organism/home/HomeHero';
// import HomeClient from '@/components/home/HomeClient';
import Navbar from '@/components/organism/navbar/Navbar';
import Feature from '@/components/organism/home/Feature';

export default function HomePage() {
  return (
    <main className="pb-12 space-y-24 sm:space-y-0">
      <Navbar />
      <HomeHero />
      <Feature />
      {/* <HomeClient data={pesantrenData} /> */}
    </main>
  );
}
