import { pesantrenData } from '@/data/pesantren-data';
import HomeHero from '@/components/home/HomeHero';
import HomeClient from '@/components/home/HomeClient';

export default function HomePage() {
  return (
    <main className="pb-12 space-y-8">
      <HomeHero />
      <HomeClient data={pesantrenData} />
    </main>
  );
}
