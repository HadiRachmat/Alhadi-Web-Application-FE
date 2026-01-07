export default function HomeHero() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10 sm:py-14">
        <div className="flex flex-col items-start gap-4 text-left">
          <span className="inline-flex items-center gap-2 rounded-full">
            Indonesia • Peta Pesantren
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Peta Pondok Pesantren Indonesia
          </h1>
          <p className="max-w-2xl text-gray-800">
            Temukan lokasi pondok pesantren di seluruh Indonesia. Gunakan pencarian dan filter untuk
            menemukan pesantren berdasarkan nama, alamat, atau provinsi.
          </p>
        </div>
      </div>
    </section>
  );
}
