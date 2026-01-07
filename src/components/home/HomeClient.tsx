'use client';

import { useMemo, useState } from 'react';
import MapPesantren from '@/components/mapPesantren/MapPesantren';
import type { Pesantren } from '@/types/pesantren';
import PesantrenCard from '@/components/PesantrenCard/PesantrenCard';

interface Props {
  data: Pesantren[];
}

export default function HomeClient({ data }: Props) {
  const [query, setQuery] = useState('');
  const [province, setProvince] = useState('');

  const provinces = useMemo(() => {
    return Array.from(new Set(data.map((d) => d.province))).sort();
  }, [data]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return data.filter((d) => {
      const matchesQuery = q
        ? d.name.toLowerCase().includes(q) || d.address.toLowerCase().includes(q)
        : true;
      const matchesProvince = province ? d.province === province : true;
      return matchesQuery && matchesProvince;
    });
  }, [data, query, province]);

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 space-y-8">
      {/* Controls */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <input
          type="text"
          placeholder="Cari nama atau alamat pesantren..."
          className="col-span-2 rounded-lg border "
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          aria-label="Pencarian"
        />
        <select
          className="rounded-lg border"
          value={province}
          onChange={(e) => setProvince(e.target.value)}
          aria-label="Filter Provinsi"
        >
          <option value="">Semua Provinsi</option>
          {provinces.map((p) => (
            <option key={p} value={p}>
              {p}
            </option>
          ))}
        </select>
      </div>

      {/* Map */}
      <section
        id="peta"
        className="rounded-xl border border-black/5 dark:border-white/10 bg-white/70 dark:bg-neutral-900/70 shadow-sm overflow-hidden"
      >
        <div className="px-4 pt-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Peta Pesantren</h2>
            <span className="text-sm text-gray-600 dark:text-gray-300">
              {filtered.length} lokasi
            </span>
          </div>
        </div>
        <div className="p-4">
          <div className="h-130 w-full rounded-lg overflow-hidden">
            <MapPesantren data={filtered} />
          </div>
        </div>
      </section>

      {/* List */}
      <section id="daftar" className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">Daftar Pesantren</h3>
          <span className="text-sm text-gray-600 dark:text-gray-300">
            Menampilkan {Math.min(filtered.length, 8)} dari {filtered.length}
          </span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.slice(0, 8).map((item) => (
            <PesantrenCard key={item.id} item={item} />
          ))}
        </div>
      </section>
    </div>
  );
}
