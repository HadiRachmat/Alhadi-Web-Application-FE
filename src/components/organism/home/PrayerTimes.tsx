"use client";

import { useEffect, useMemo, useState } from "react";
import { PrayerTimes, CalculationMethod, Coordinates, Madhab } from "adhan";
import DigitalClock from "./DigitalClock";

type Times = {
  imsak: Date;
  subuh: Date; // Fajr
  dzuhur: Date; // Dhuhr
  ashar: Date; // Asr
  maghrib: Date; // Maghrib
  isya: Date; // Isha
};

export default function PrayerTimesWidget() {
  const [coords, setCoords] = useState<Coordinates>(() => new Coordinates(-6.2, 106.8)); // Jakarta fallback
  const [label, setLabel] = useState<string>("Jakarta, ID");
  const [times, setTimes] = useState<Times | null>(null);

  // Try to get user location on mount
  useEffect(() => {
    if (typeof navigator === "undefined" || !navigator.geolocation) return;
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        setCoords(new Coordinates(latitude, longitude));
        setLabel("Lokasi Anda");
      },
      () => {
        // Ignore errors, fallback already set
      },
      { enableHighAccuracy: true, timeout: 5000 }
    );
  }, []);

  // Compute prayer times whenever coordinates change
  useEffect(() => {
    const today = new Date();
    const params = CalculationMethod.MuslimWorldLeague();
    params.madhab = Madhab.Shafi; // Common in Indonesia

    const pt = new PrayerTimes(coords, today, params);

    const fajr = pt.fajr;
    const dhuhr = pt.dhuhr;
    const asr = pt.asr;
    const maghrib = pt.maghrib;
    const isha = pt.isha;
    const imsak = new Date(fajr.getTime() - 10 * 60 * 1000); // 10 minutes before Fajr

    setTimes({ imsak, subuh: fajr, dzuhur: dhuhr, ashar: asr, maghrib, isya: isha });
  }, [coords]);

  const fmt = useMemo(
    () =>
      (d: Date) =>
        d.toLocaleTimeString("id-ID", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        }),
    []
  );

  return (
    <section className="mt-6 w-full max-w-2xl">
      <div className="rounded-xl border border-black/5 dark:border-white/10 bg-white/80 dark:bg-neutral-900/80 p-4 shadow-sm">
        <div className="text-center">
          <h3 className="text-base font-semibold">Waktu Sholat Hari Ini</h3>
          <span className="text-xs text-gray-600 dark:text-gray-300">{label}</span>
          <DigitalClock />
        </div>
        <div className="mt-3 grid grid-cols-2 gap-3">
          <Item label="Imsak" value={times ? fmt(times.imsak) : "-"} />
          <Item label="Subuh" value={times ? fmt(times.subuh) : "-"} />
          <Item label="Dzuhur" value={times ? fmt(times.dzuhur) : "-"} />
          <Item label="Ashar" value={times ? fmt(times.ashar) : "-"} />
          <Item label="Maghrib" value={times ? fmt(times.maghrib) : "-"} />
          <Item label="Isya" value={times ? fmt(times.isya) : "-"} />
        </div>
        <p className="mt-2 text-[11px] text-gray-500 text-center">
          Perhitungan menggunakan metode Muslim World League (madhab Syafi`i). Imsak diatur 10 menit sebelum Subuh.
        </p>
      </div>
    </section>
  );
}

function Item({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between rounded-lg border border-black/5 dark:border-white/10 bg-white/70 dark:bg-neutral-900/70 px-3 py-2">
      <span className="text-sm font-medium">{label}</span>
      <span className="font-mono text-sm">{value}</span>
    </div>
  );
}
