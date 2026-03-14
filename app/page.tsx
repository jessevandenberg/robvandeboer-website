/* eslint-disable @next/next/no-img-element */
"use client";

import Image, { type StaticImageData } from "next/image";
import { useEffect, useState } from "react";

import slideImageBathroom from "./images/homepage3.png";
import slideImageStairs from "./images/homepage1.png";

type Slide = {
  id: number;
  title: string;
  subtitle: string;
  image: StaticImageData;
  alt: string;
};

const slides: Slide[] = [
  {
    id: 1,
    title: "Vloeren en wanden die spreken",
    subtitle: "",
    image: slideImageBathroom,
    alt: "Badkamer met groene tegels en houten wastafelmeubel",
  },
  {
    id: 2,
    title: "Breng Klasse in Huis",
    subtitle: "Tegels met Karakter",
    image: slideImageStairs,
    alt: "Trap met luxe marmeren tegels en verlichting",
  },
];

const AUTO_SLIDE_INTERVAL_MS = 7000;

const Home: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  const handleNext = (): void => {
    setCurrentIndex((previousIndex) => {
      const isLastSlide = previousIndex === slides.length - 1;
      if (isLastSlide) {
        return 0;
      }

      return previousIndex + 1;
    });
  };

  const handlePrevious = (): void => {
    setCurrentIndex((previousIndex) => {
      const isFirstSlide = previousIndex === 0;
      if (isFirstSlide) {
        return slides.length - 1;
      }

      return previousIndex - 1;
    });
  };

  const handleGoToSlide = (index: number): void => {
    setCurrentIndex(index);
  };

  const handleMouseEnter = (): void => {
    setIsPaused(true);
  };

  const handleMouseLeave = (): void => {
    setIsPaused(false);
  };

  useEffect(() => {
    if (isPaused) {
      return;
    }

    const intervalId = window.setInterval(() => {
      handleNext();
    }, AUTO_SLIDE_INTERVAL_MS);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [isPaused]);

  const activeSlide = slides[currentIndex];

  return (
    <div
      className="relative flex h-screen w-full overflow-hidden bg-black text-white"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Achtergrondafbeelding */}
      <div className="absolute inset-0">
        <Image
          src={activeSlide.image}
          alt={activeSlide.alt}
          fill
          priority
          quality={100}
          className="object-cover scale-100"
          sizes="100vw"
        />
      </div>


      {/* Hoofdcontent - Tekst boven de buttons */}
      <main className="relative z-10 flex h-full w-full flex-col justify-center px-4 md:px-16 lg:px-24">
        <div 
          className="max-w-4xl md:ml-16 lg:ml-24"
          style={{
            marginLeft: '8px',
            marginBottom: '32px',
            transform: 'translateY(-64px)',
          }}
        >
          <h1 className="text-2xl font-bold leading-tight text-white drop-shadow-lg sm:text-4xl md:text-5xl lg:text-6xl">
            {activeSlide.title === "Vloeren en wanden die spreken" ? (
              <>
                Vloeren en wanden die<br />
                spreken
              </>
            ) : (
              activeSlide.title
            )}
          </h1>
          {activeSlide.subtitle && (
            <p className="mt-3 text-base font-medium text-white drop-shadow-md sm:mt-4 sm:text-lg md:text-xl lg:text-2xl">
              {activeSlide.subtitle}
            </p>
          )}
        </div>
      </main>

      {/* Navigatiepijl links */}
      <button
        type="button"
        onClick={handlePrevious}
        className="group absolute top-1/2 z-20 flex items-center justify-center rounded-full border-2 border-white/80 bg-black/50 text-white backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-white/20 hover:border-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-black active:scale-95"
        style={{
          left: '16px',
          width: '40px',
          height: '40px',
          transform: 'translateY(-50%)',
        }}
        aria-label="Vorige dia"
      >
        <svg
          className="transition-transform duration-300 group-hover:-translate-x-0.5"
          style={{
            width: '20px',
            height: '20px',
          }}
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </button>

      {/* Navigatiepijl rechts */}
      <button
        type="button"
        onClick={handleNext}
        className="group absolute top-1/2 z-20 flex items-center justify-center rounded-full border-2 border-white/80 bg-black/50 text-white backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-white/20 hover:border-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-black active:scale-95"
        style={{
          right: '16px',
          width: '40px',
          height: '40px',
          transform: 'translateY(-50%)',
        }}
        aria-label="Volgende dia"
      >
        <svg
          className="transition-transform duration-300 group-hover:translate-x-0.5"
          style={{
            width: '20px',
            height: '20px',
          }}
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>

      {/* Dots onderin */}
      <div 
        className="pointer-events-auto absolute inset-x-0 z-40 flex items-center justify-center"
        style={{
          bottom: '32px',
          gap: '8px',
        }}
      >
        {slides.map((slide, index) => {
          const isActive = index === currentIndex;

          return (
            <button
              key={slide.id}
              type="button"
              onClick={() => handleGoToSlide(index)}
              className="rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              style={{
                height: '10px',
                width: isActive ? '24px' : '10px',
                backgroundColor: isActive ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 0.5)',
              }}
              aria-label={`Ga naar dia ${index + 1}`}
              aria-current={isActive ? "true" : undefined}
            />
          );
        })}
      </div>

      {/* Diagonale overlay onderaan met clip-path (punt wijst naar beneden) */}
      <div
        className="absolute bottom-0 left-0 right-0 z-10 h-[25vh] pointer-events-none"
        style={{
            clipPath:
              "polygon(0% 100%, 0% 35%, 5% 38%, 10% 42%, 20% 48%, 30% 55%, 40% 62%, 50% 70%, 60% 62%, 70% 55%, 80% 48%, 90% 42%, 95% 38%, 100% 35%, 100% 100%)",
          background:
            "linear-gradient(to bottom, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.7) 50%, rgba(255, 255, 255, 0.8) 100%)",
          backdropFilter: "blur(2px)",
        }}
      />
    </div>
  );
};

export default Home;
