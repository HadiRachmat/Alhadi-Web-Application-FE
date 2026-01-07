import Image from 'next/image';
import quran from '../../../../public/quran.png';
import calendar from '../../../../public/calendar.png';
import clock from '../../../../public/clock.png';
import mecca from '../../../../public/mecca.png';
import ramadhan from '../../../../public/ramadhan.png';
import sholat from '../../../../public/sholat.png';
import HeroTypewriter from './HeroTypewriter';
import PrayerTimes from './PrayerTimes';

export default function HomeHero() {
  return (
    <section className=" h-screen flex justify-center items-center">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 sm:py-14">
        <div className="flex flex-col items-center gap-4 text-left">
          <span className="inline-flex items-center gap-2 rounded-full">
            Indonesia • explore Pesantren
          </span>
          <HeroTypewriter
            className="text-white text-center text-1.5xl sm:text-4xl md:text-5xl font-bold tracking-tight"
            text="Sejuta Pesantren, Satu Indonesia."
            typingSpeed={100}
            pauseBetween={1400}
            loop={false}
          />
          <p className="text-white text-center">
            website ini dihadiahkan untuk seluruh umat islam di indonesia agar lebih mudah dalam
            menemukan lokasi pesantren
          </p>
          <PrayerTimes />
          <div className="grid grid-cols-3 sm:gap-x-56 gap-x-12 gap-y-8 mt-10 place-items-center">
            <div className="group bg-white p-4 rounded-xl shadow-sm ring-1 ring-black/5 dark:ring-white/10 transition-transform duration-200 ease-out hover:shadow-md hover:-translate-y-0.5 hover:ring-emerald-500 active:scale-95 cursor-pointer">
              <Image
                src={quran}
                alt="quran"
                className="h-10 w-10 object-contain transition-transform duration-200 group-hover:scale-105"
              />
            </div>
            <div className="group bg-white p-4 rounded-xl shadow-sm ring-1 ring-black/5 dark:ring-white/10 transition-transform duration-200 ease-out hover:shadow-md hover:-translate-y-0.5 hover:ring-emerald-500 active:scale-95 cursor-pointer">
              <Image
                src={calendar}
                alt="calendar"
                className="h-10 w-10 object-contain transition-transform duration-200 group-hover:scale-105"
              />
            </div>
            <div className="group bg-white p-4 rounded-xl shadow-sm ring-1 ring-black/5 dark:ring-white/10 transition-transform duration-200 ease-out hover:shadow-md hover:-translate-y-0.5 hover:ring-emerald-500 active:scale-95 cursor-pointer">
              <Image
                src={clock}
                alt="clock"
                className="h-10 w-10 object-contain transition-transform duration-200 group-hover:scale-105"
              />
            </div>
            <div className="group bg-white p-4 rounded-xl shadow-sm ring-1 ring-black/5 dark:ring-white/10 transition-transform duration-200 ease-out hover:shadow-md hover:-translate-y-0.5 hover:ring-emerald-500 active:scale-95 cursor-pointer">
              <Image
                src={mecca}
                alt="mecca"
                className="h-10 w-10 object-contain transition-transform duration-200 group-hover:scale-105"
              />
            </div>
            <div className="group bg-white p-4 rounded-xl shadow-sm ring-1 ring-black/5 dark:ring-white/10 transition-transform duration-200 ease-out hover:shadow-md hover:-translate-y-0.5 hover:ring-emerald-500 active:scale-95 cursor-pointer">
              <Image
                src={ramadhan}
                alt="ramadhan"
                className="h-10 w-10 object-contain transition-transform duration-200 group-hover:scale-105"
              />
            </div>
            <div className="group bg-white p-4 rounded-xl shadow-sm ring-1 ring-black/5 dark:ring-white/10 transition-transform duration-200 ease-out hover:shadow-md hover:-translate-y-0.5 hover:ring-emerald-500 active:scale-95 cursor-pointer">
              <Image
                src={sholat}
                alt="sholat"
                className="h-10 w-10 object-contain transition-transform duration-200 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
