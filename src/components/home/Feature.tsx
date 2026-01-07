const Feature = () => {
  return (
    <>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10 sm:py-14">
        <div className="flex flex-col items-center gap-4 text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-center">
            Fitur Peta Pesantren
          </h2>
          <p className="max-w-2xl text-center">
            Jelajahi berbagai fitur yang memudahkan Anda menemukan pesantren di seluruh Indonesia.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="border rounded-lg p-6 text-center hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-4">Pencarian Mudah</h3>
            <p>Cari pesantren berdasarkan nama atau alamat dengan cepat dan akurat.</p>
          </div>
          <div className="border rounded-lg p-6 text-center hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-4">Filter Provinsi</h3>
            <p>Saring pesantren berdasarkan provinsi untuk menemukan lokasi terdekat.</p>
          </div>
          <div className="border rounded-lg p-6 text-center hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-4">Peta Interaktif</h3>
            <p>Lihat lokasi pesantren secara visual dengan peta interaktif yang mudah digunakan.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feature;
