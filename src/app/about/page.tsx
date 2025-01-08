"use client";
import Image from "next/image";
import { Stats } from "../../components/stats";
import { Utensils, Megaphone, PenTool } from "lucide-react";

export default function AboutUS() {
  return (
    <div className="min-h-screen bg-[#FAF3E3]">
      {/* Main Container */}
      <div className="container mx-auto px-4 pt-32">
        {/* First Section */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Section */}
          <div className="space-y-8 z-10">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                About Me
              </h1>
              <p className="text-gray-600 leading-relaxed">
              Arnold Schwarzenegger revolutionized bodybuilding with his unmatched dedication and discipline.
               From his early days in Austria to becoming the dominant force in the world of bodybuilding,
                he has inspired millions. His rigorous training regimen, combined with his passion for the sport,
                helped him secure multiple Mr. Olympia titles. Beyond just physical strength, Arnold&#39;s philosophy
                  of bodybuilding emphasized the mind-muscle connection, mental focus, and the importance of pushing past limits.
                   His influence on fitness culture and his iconic physique continue to motivate athletes around the world.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#D4A69B]/10 rounded-lg">
                  <Utensils className="h-6 w-6 text-[#D4A69B]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    FOOD CRITIC
                  </h3>
                  <p className="text-gray-600">
                    Diam nulla blandit urna tristique sit etiam amet adipiscing.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#D4A69B]/10 rounded-lg">
                  <Megaphone className="h-6 w-6 text-[#D4A69B]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    INFLUENCER
                  </h3>
                  <p className="text-gray-600">
                    Et volutpat lacinia enim, purus et rhoncus nibh egestas
                    habitant elit.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#D4A69B]/10 rounded-lg">
                  <PenTool className="h-6 w-6 text-[#D4A69B]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    BLOGGER
                  </h3>
                  <p className="text-gray-600">
                    Venenatis egestas lectus interdum enim orci intege.
                  </p>
                </div>
              </div>
            </div>
            <div className="py-12"></div>
            <Stats />
            <div className="py-12"></div>
          </div>

          {/* Right Section */}
          <div className="relative h-[600px] hidden md:block">
            <Image
              src="/Arnold.jpeg"
              alt="Portrait photo"
              fill
              className="object-cover rounded-lg"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </div>

        {/* Second Section */}
        <div className="min-h-screen flex items-center justify-center mt-12">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            {/* Left Section */}
            <div className="relative h-full w-full p-6 rounded-lg">
              <img
                src="/img-3.jpeg"
                alt="Woman enjoying food"
                className="object-cover w-full h-full rounded-lg"
              />
            </div>

            {/* Right Section */}
            <div className="space-y-6 bg-[#FAF3E3]">
              <p className="text-5xl text-[#C4978B] font-serif">&ldquo;</p>
              <p className="text-2xl font-semibold leading-relaxed text-gray-800">
                Sem nibh tristique ut laoreet amet tortor eu urna, ante urna
                aliquam tellus suscipit turpis turpis volutpat sed malesuada
                cras amet, donec eget molestie ipsum semper nunc aenean
                sagittis consequat.
              </p>
              <div className="flex flex-col items-start bg-[#FAF3E3]">
                <img
                  src="/sign.png"
                  alt="Signature"
                  className="w-32 h-auto mb-2"
                />
                <p className="text-lg font-medium text-gray-700 bg-[#f3f4f6]">
                  <strong>Saud Muhammad Ali</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white py-16 bg-[#FAF3E3]">
      <div className="container mx-auto px-4 bg-[#FAF3E3]">
        {/* Featured Logos */}
        <div className="text-center mb-16 py-12">
          <h2 className="text-sm uppercase text-gray-500 font-medium tracking-wide">
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

        {/* Testimonial Section */}
        <div className="relative ">
          <div className="relative">
            <Image
              src="/dinner.jpg"
              alt="Family Dinner"
              width={1200}
              height={600}
              className="object-cover w-[100%] h-[100%] rounded-lg"
            />
            <div className="absolute inset-0 bg-black/25 rounded-lg"></div>
          </div>

          {/* Testimonial Content */}
          <div className="absolute bottom-6 left-8 text-white space-y-4">
            <div className="flex items-center gap-4">
              <button
                className="p-4 bg-white rounded-full text-black hover:bg-gray-100 focus:ring-2 focus:ring-gray-300"
                aria-label="Play Video"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5.25 5.25v13.5l13.5-6.75L5.25 5.25z"
                  />
                </svg>
              </button>
              <div>
                <h3 className="text-xl font-bold">Dianna Adam&#39;s Family</h3>
                <p className="text-gray-200">
                  Est, cras aliquet nunc, habitant velit ac, et sit tincidunt
                  amet mi nulla pellentesque dignissim mattis tempor.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#FAF3E3] py-16">
  {/* Follow Along Section */}
  <div className="container mx-auto px-4">
    <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Follow along</h2>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
      {/* Images */}
      <div className="aspect-w-1 aspect-h-1">
        <img
          src="/img-4.jpeg"
          alt="Gallery 1"
          className="object-cover w-full h-full rounded-lg"
        />
      </div>
      <div className="aspect-w-1 aspect-h-1">
        <img
          src="/img-5.jpeg"
          alt="Gallery 2"
          className="object-cover w-full h-full rounded-lg"
        />
      </div>
      <div className="aspect-w-1 aspect-h-1">
        <img
          src="/img-6.jpeg"
          alt="Gallery 3"
          className="object-cover w-full h-full rounded-lg"
        />
      </div>
      <div className="aspect-w-1 aspect-h-1">
        <img
          src="/img-7.jpeg"
          alt="Gallery 4"
          className="object-cover w-full h-full rounded-lg"
        />
      </div>
      <div className="aspect-w-1 aspect-h-1">
        <img
          src="/img-8.jpeg"
          alt="Gallery 5"
          className="object-cover w-full h-full rounded-lg"
        />
      </div>
      <div className="aspect-w-1 aspect-h-1">
        <img
          src="/img-9.jpeg"
          alt="Gallery 6"
          className="object-cover w-full h-full rounded-lg"
        />
      </div>
    </div>
    {/* Follow Along Section */}
    <div className="py-16 px-4 md:px-12 bg-[#f3f4f6] text-center">
          <h2 className="text-3xl font-bold text-[#333] mb-4">
            Follow Me for Updates and Tips
          </h2>
          <p className="text-xl text-gray-600 mb-6">
            Keep up with my latest posts, workouts, and fitness journeys.
          </p>
          <a
            href="https://www.linkedin.com/in/saud-muhammad-ali-6b4a222b6/"
            className="inline-block bg-[#C4978B] text-white text-lg py-3 px-6 rounded-lg"
          >
            Follow On LinkedIn
          </a>
        </div>
  </div>
    </div>
   </div>
      </div>
    </div>
    
  );
}
