import Image from 'next/image';
import { Stats } from './stats';

export function Hero() {
  return (
    <div className="min-h-screen relative bg-[#FAF3E3]">
      <div className="container mx-auto px-8 pt-52">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 z-10">
            <div className="text-[#D4AF37] uppercase tracking-wide">Welcome</div>
            <h1 className="text-5xl md:text-6xl font-bold text-[#2E2E2E]">
            Hi I&#39;m Saud Muhammad Ali.
            </h1>
            <h2 className="text-2xl text-[#2E2E2E]">
              Full Stack Developer / Chef / ESportsGamer / Athlete 
            </h2>
            <p className="text-[#4A4A4A] leading-relaxed">
            Transforming code into delicious dishes and dreams into reality. Join me on a journey through technology, fitness, and flavors that inspire.
            </p>
            <button className="border-2 border-[#7f5539] dark:border-[#f3b98b] text-[#7f5539] dark:text-[#f3b98b] px-6 py-3 rounded-lg shadow-lg hover:bg-[#7f5539] dark:hover:bg-[#f3b98b] hover:text-white dark:hover:text-[#232a2f] transition-colors rounded-md font-medium">
              JOIN INSIDER
            </button>
            <div className='pt-12'></div>
            <Stats />
            <div className='pt-12'></div>
          </div>
          <div className="relative h-[600px] hidden md:block">
            <Image
              src="/img-1.jpeg"
              alt="Food blogger enjoying a meal"
              fill
              className="object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
        <div className="text-center mb-16 py-16">
          <h2 className="text-sm uppercase text-[#4A4A4A] font-medium tracking-wide">
            As Featured In
          </h2>
          <div className="flex justify-center items-center gap-8 mt-6">
            <Image
              src="/log1.png"
              alt="Logo 1"
              width={150}
              height={150}
              className="object-contain grayscale hover:grayscale-0 transition duration-300"
            />
            <Image
              src="/log2.png"
              alt="Logo 2"
              width={150}
              height={150}
              className="object-contain grayscale hover:grayscale-0 transition duration-300"
            />
            <Image
              src="/log3.png"
              alt="Logo 3"
              width={150}
              height={150}
              className="object-contain grayscale hover:grayscale-0 transition duration-300"
            />
            <Image
              src="/log4.png"
              alt="Logo 4"
              width={150}
              height={150}
              className="object-contain grayscale hover:grayscale-0 transition duration-300"
            />
            <Image
              src="/log5.png"
              alt="Logo 5"
              width={150}
              height={150}
              className="object-contain grayscale hover:grayscale-0 transition duration-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
