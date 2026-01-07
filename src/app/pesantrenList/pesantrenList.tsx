import { pesantrenData } from '@/data/pesantren-data';
import Link from 'next/link';

export default function PesantrenList() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Daftar Pesantren</h1>

      <div className="grid md:grid-cols-2 gap-4">
        {pesantrenData.map((p) => (
          <Link key={p.id} href={`/pesantren/${p.id}`} className="border rounded p-4 hover:shadow">
            <h2 className="font-semibold">{p.name}</h2>
            <p className="text-sm text-gray-500">{p.address}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
