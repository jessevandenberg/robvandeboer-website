"use client";

import Image, { type StaticImageData } from "next/image";
import { useState, useRef, useEffect } from "react";

import Footer from "../components/Footer";

import buitenimage from "../images/buitentegelhandel.png";
import casalgrande from "../images/casalgrande.jpg";
import ceramicaFlaminia from "../images/ceramica-flaminia.png";
import ceramicaRondine from "../images/Ceramica-Rondine.png";
import cottoceramix from "../images/cotteceramix.png";
import delconca from "../images/delcona.png";
import flaviker from "../images/flaviker.png";
import fondovalle from "../images/fondovalle.png";
import keradom from "../images/Keradom.png";
import kerateam from "../images/kerateam.png";
import lafenice from "../images/lafenice.png";
import mapei from "../images/mapei.png";
import mosaic from "../images/mosaic.png";
import panaria from "../images/panaria.png";
import pastorelli from "../images/pastorelli.png";
import ragno from "../images/ragno.png";
import rak from "../images/rak.jpg";
import revoirParis from "../images/revoir-paris.png";
import saloni from "../images/saloni.png";
import tmf from "../images/tmf.png";
import vloertegels from "../images/vloertegels.png";
import wandtegel from "../images/muurtegels.png";
import winkel1 from "../images/winkel 1.png";

const Assortiment: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [brandsVisible, setBrandsVisible] = useState(4);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const brands: Array<{ name: string; logo: StaticImageData }> = [
    { name: "RAGNO", logo: ragno },
    { name: "FLAVIKER", logo: flaviker },
    { name: "pastorelli", logo: pastorelli },
    { name: "DEL CONCA", logo: delconca },
    { name: "REVOIR PARIS", logo: revoirParis },
    { name: "SALONI", logo: saloni },
    { name: "CERAMICA RONDINE", logo: ceramicaRondine },
    { name: "CERAMICA FLAMINIA", logo: ceramicaFlaminia },
    { name: "RAK", logo: rak },
    { name: "CASALGRANDE", logo: casalgrande },
    { name: "PANARIA", logo: panaria },
    { name: "FONDOVALLE", logo: fondovalle },
    { name: "KERADOM", logo: keradom },
    { name: "KERATEAM", logo: kerateam },
    { name: "LAFENICE", logo: lafenice },
  ];

  const getCurrentBrands = (): Array<{ name: string; logo: StaticImageData }> => {
    const visibleBrands: Array<{ name: string; logo: StaticImageData }> = [];
    
    for (let i = 0; i < brandsVisible; i++) {
      const index = (currentIndex + i) % brands.length;
      visibleBrands.push(brands[index]);
    }
    
    return visibleBrands;
  };

  useEffect(() => {
    const updateBrandsVisible = (): void => {
      const width = window.innerWidth;
      if (width < 768) {
        // Mobiel: 2 images
        setBrandsVisible(2);
      } else {
        // Laptop/Desktop: 4 images
        setBrandsVisible(4);
      }
    };

    updateBrandsVisible();
    window.addEventListener("resize", updateBrandsVisible);

    return () => {
      window.removeEventListener("resize", updateBrandsVisible);
    };
  }, []);

  const handleBrandNext = (): void => {
    setCurrentIndex((prev) => (prev + 1) % brands.length);
  };

  const handleBrandPrevious = (): void => {
    setCurrentIndex((prev) => (prev - 1 + brands.length) % brands.length);
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
      setCurrentIndex((prev) => (prev + 1) % brands.length);
    }, 3000);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [isPaused, brands.length]);

  return (
    <div className="min-h-screen bg#D9D9D9">
      {/* Hero Section met "assortiment" */}
      <section className="relative h-[70vh] w-full overflow-hidden md:h-[65vh]">
        <div className="absolute inset-0">
          <Image
            src={winkel1}
            alt="Showroom interieur"
            fill
            className="object-cover"
            priority
            quality={100}
            sizes="100vw"
          />
        </div>
        {/* Verduisterende overlay voor betere tekst leesbaarheid */}
        <div className="absolute inset-0 bg-black/30 z-0"></div>
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <h1 className="text-4xl font-bold text-white drop-shadow-lg sm:text-5xl md:text-7xl lg:text-8xl">
            assortiment
          </h1>
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
      </section>

      {/* Ons Assortiment Sectie */}
      <section className="bg-white py-16 px-4 md:py-24 md:px-8 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-12 text-3xl font-bold text-black md:mb-16 md:text-4xl lg:text-5xl">
            Ons Assortiment
          </h2>
          <div className="grid gap-8 md:gap-12 md:grid-cols-3">
            {/* Vloertegels Card */}
            <div className="overflow-hidden rounded-lg bg-white shadow-lg">
              <div className="relative h-48 md:h-64">
                <Image
                  src={vloertegels}
                  alt="Vloertegels"
                  fill
                  className="object-cover scale-90 md:scale-100"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-6 md:p-8">
                <h3 className="mb-3 text-lg font-semibold md:mb-4 md:text-xl">Vloertegels</h3>
                <p className="text-sm text-gray-600 md:text-base">
                  Duurzame en stijlvolle vloertegels voor elke ruimte
                </p>
              </div>
            </div>

            {/* Wandtegels Card */}
            <div className="overflow-hidden rounded-lg bg-white shadow-lg">
              <div className="relative h-48 md:h-64">
                <Image
                  src={wandtegel}
                  alt="Wandtegels"
                  fill
                  className="object-cover scale-90 md:scale-100"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-6 md:p-8">
                <h3 className="mb-3 text-lg font-semibold md:mb-4 md:text-xl">Wandtegels</h3>
                <p className="text-sm text-gray-600 md:text-base">
                  Elegante wandtegels die uw interieur transformeren
                </p>
              </div>
            </div>

            {/* Mozaïek Card */}
            <div className="overflow-hidden rounded-lg bg-white shadow-lg">
              <div className="relative h-48 md:h-64">
                <Image
                  src={mosaic}
                  alt="Mozaïek"
                  fill
                  className="object-cover scale-90 md:scale-100"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-6 md:p-8">
                <h3 className="mb-3 text-lg font-semibold md:mb-4 md:text-xl">Mozaïek</h3>
                <p className="text-sm text-gray-600 md:text-base">
                  Creatieve mozaïektegels voor unieke accenten
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dealerschappen Sectie */}
      <section className="bg-[#D9D9D9] py-16 px-4 md:py-24 md:px-8 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-8 text-4xl font-bold text-black md:text-5xl">
            Dealerschappen
          </h2>
          <p className="mb-16 max-w-3xl text-lg text-gray-900">
            Wij werken samen met een zorgvuldig geselecteerd netwerk van
            gespecialiseerde dealers. Zij staan garant voor kwaliteit, service
            en vakmanschap.
          </p>
          <div className="grid gap-8 md:gap-12 md:grid-cols-3">
            {/* CX cottoceramix */}
            <div className="flex flex-col rounded-lg bg-white p-6 shadow-md md:p-10">
              <div className="relative mb-6 h-24 w-full md:mb-8 md:h-32">
                <Image
                  src={cottoceramix}
                  alt="CX cottoceramix logo"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <p className="mb-6 grow text-sm text-gray-600">
              Cottoceramix is al 25 jaar een vertrouwde groothandel in wand- en vloertegels 
              die een ruimte nét dat beetje extra geven. We combineren een breed assortiment,
               van eigentijdse collecties tot opvallende designs, met een scherp oog voor kwaliteit 
               en toepasbaarheid.
              </p>
              <a
                href="https://www.instagram.com/cottoceramix/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-500 transition-colors hover:text-gray-700"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                <span className="text-sm">Instagram</span>
              </a>
            </div>

            {/* TMF the Mosaic factory */}
            <div className="flex flex-col rounded-lg bg-white p-6 shadow-md md:p-10">
              <div className="relative mb-6 h-24 w-full md:mb-8 md:h-32">
                <Image
                  src={tmf}
                  alt="TMF the Mosaic factory logo"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <p className="mb-6 grow text-sm text-gray-600">
              Al meer dan 30 jaar is UCI Union Ceramics International B.V. specialist
               in het ontwerpen en distribueren van glas- en keramiekmozaïek. Met ons 
               merk The Mosaic Factory, kortweg TMF, leveren we mozaïek in meer dan 40 
               landen wereldwijd.
              </p>
              <a
                href="https://www.instagram.com/tmf_mosaic/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-500 transition-colors hover:text-gray-700"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                <span className="text-sm">Instagram</span>
              </a>
            </div>

            {/* MAPEI */}
            <div className="flex flex-col rounded-lg bg-white p-6 shadow-md md:p-10">
              <div className="relative mb-6 h-24 w-full md:mb-8 md:h-32">
                <Image
                  src={mapei}
                  alt="MAPEI logo"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <p className="mb-6 grow text-sm text-gray-600">
              Mapei is nu een van 's werelds grootste producenten van chemische producten 
              voor de bouwindustrie. Wij bieden duurzame kwaliteitsproducten die rekening
               houden met de planeet en de mensen. 
              </p>
              <a
                href="https://www.instagram.com/mapei_nederland/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-500 transition-colors hover:text-gray-700"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                <span className="text-sm">Instagram</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Onze Merken Sectie */}
      <section className="bg-white py-12 px-4 sm:py-16 md:py-32 md:px-8 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-8 text-3xl font-bold text-black sm:mb-12 sm:text-4xl md:mb-16 md:text-5xl">
            onze merken
          </h2>
          <div
            className="relative px-8 sm:px-12 md:px-0"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              type="button"
              onClick={handleBrandPrevious}
              className="group absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-2 shadow-md transition-all hover:bg-gray-100 hover:scale-110 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 sm:p-2.5 md:p-3 md:shadow-lg"
              aria-label="Vorige groep merken"
            >
              <svg
                className="h-4 w-4 text-gray-700 transition-transform group-hover:-translate-x-0.5 sm:h-5 sm:w-5 md:h-6 md:w-6 lg:h-7 lg:w-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>
            <div className="mx-auto w-full overflow-hidden max-w-[calc(100vw-2rem)] md:max-w-[600px] lg:max-w-[800px] xl:max-w-[1000px] 2xl:max-w-[1200px]">
              <div
                ref={scrollContainerRef}
                className="relative flex items-center justify-center gap-4 sm:gap-5 md:gap-6 lg:gap-8 xl:gap-10"
              >
                {getCurrentBrands().map((brand, index) => {
                  const brandIndex = (currentIndex + index) % brands.length;
                  return (
                    <div
                      key={`${brand.name}-${brandIndex}`}
                      className="shrink-0 transition-opacity duration-300 ease-in-out"
                    >
                      <div className="relative h-20 w-24 flex items-center justify-center rounded sm:h-24 sm:w-28 md:h-28 md:w-32 lg:h-32 lg:w-40 xl:h-40 xl:w-48 2xl:h-48 2xl:w-56">
                        <Image
                          src={brand.logo}
                          alt={`${brand.name} logo`}
                          fill
                          className="object-contain"
                          sizes="(max-width: 640px) 96px, (max-width: 768px) 112px, (max-width: 1024px) 128px, (max-width: 1280px) 160px, (max-width: 1536px) 192px, 224px"
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <button
              type="button"
              onClick={handleBrandNext}
              className="group absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-2 shadow-md transition-all hover:bg-gray-100 hover:scale-110 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 sm:p-2.5 md:p-3 md:shadow-lg"
              aria-label="Volgende groep merken"
            >
              <svg
                className="h-4 w-4 text-gray-700 transition-transform group-hover:translate-x-0.5 sm:h-5 sm:w-5 md:h-6 md:w-6 lg:h-7 lg:w-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Kom bij ons langs Sectie */}
      <section className="bg-[#D9D9D9] py-16 px-4 md:py-24 md:px-8 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-8 text-4xl font-bold text-black md:text-5xl">
            Kom bij ons langs
          </h2>
          <p className="mb-12 text-lg text-gray-900">
            Bezoek onze showroom en ontdek zelf ons uitgebreide assortiment
            tegels en producten van topkwaliteit.
          </p>
          <div className="grid gap-12 md:grid-cols-2">
            <div className="relative h-64 overflow-hidden rounded-lg md:h-80">
              <Image
                src={buitenimage}
                alt="Showroom exterieur"
                fill
                className="object-cover scale-90 md:scale-100"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div>
              <h3 className="mb-6 text-2xl font-semibold">openingstijden</h3>
              <div className="space-y-3 text-gray-900">
                <div className="flex justify-between">
                  <span>maandag</span>
                  <span>13:00-17:30</span>
                </div>
                <div className="flex justify-between">
                  <span>dinsdag</span>
                  <span>9:00-17:30</span>
                </div>
                <div className="flex justify-between">
                  <span>woensdag</span>
                  <span>9:00-17:30</span>
                </div>
                <div className="flex justify-between">
                  <span>donderdag</span>
                  <span>9:00-17:30</span>
                </div>
                <div className="flex justify-between">
                  <span>vrijdag</span>
                  <span>9:00-17:30</span>
                </div>
                <div className="flex justify-between">
                  <span>zaterdag</span>
                  <span>9:00-16:00</span>
                </div>
                <div className="flex justify-between">
                  <span>zondag</span>
                  <span>gesloten</span>
                </div>
              </div>
              <p className="mt-8 text-gray-900">
                Adres: Kantsingel 10, 5349 AJ Oss
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Assortiment;
