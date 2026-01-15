"use client";

import Image, { type StaticImageData } from "next/image";
import { useState } from "react";

import Footer from "../components/Footer";

import buitenimage from "../images/buitenimage.png";
import cottoceramix from "../images/cottoceramix.png";
import delconca from "../images/delconca.png";
import flaviker from "../images/flaviker.png";
import mapei from "../images/mapei.png";
import mosaic from "../images/mosaic.png";
import pastorelli from "../images/pastorelli.png";
import ragno from "../images/ragno.png";
import tmf from "../images/tmf.png";
import vloertegels from "../images/vloertegels.png";
import wandtegel from "../images/wandtegel.png";
import winkel1 from "../images/winkel 1.png";

const Assortiment: React.FC = () => {
  const [brandIndex, setBrandIndex] = useState(0);

  const brands: Array<{ name: string; logo: StaticImageData }> = [
    { name: "RAGNO", logo: ragno },
    { name: "FLAVIKER", logo: flaviker },
    { name: "pastorelli", logo: pastorelli },
    { name: "DEL CONCA", logo: delconca },
  ];

  const handleBrandNext = (): void => {
    setBrandIndex((prev) => (prev + 1) % brands.length);
  };

  const handleBrandPrevious = (): void => {
    setBrandIndex((prev) => (prev - 1 + brands.length) % brands.length);
  };

  return (
    <div className="min-h-screen bg-gray-100">
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
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white drop-shadow-lg md:text-7xl lg:text-8xl">
            assortiment
          </h1>
        </div>

        {/* Diagonale overlay onderaan met clip-path (punt wijst naar beneden) */}
        <div
          className="absolute bottom-0 left-0 right-0 z-10 h-[25vh] pointer-events-none"
          style={{
            clipPath:
              "polygon(0% 100%, 0% 35%, 10% 40%, 20% 45%, 30% 50%, 40% 55%, 50% 60%, 60% 55%, 70% 50%, 80% 45%, 90% 40%, 100% 35%, 100% 100%)",
            background:
              "linear-gradient(to bottom, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.25) 50%, rgba(255, 255, 255, 0.35) 100%)",
            backdropFilter: "blur(2px)",
          }}
        />
      </section>

      {/* Ons Assortiment Sectie */}
      <section className="bg-white py-12 px-4 md:py-16 md:px-8 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-8 text-3xl font-bold text-black md:mb-12 md:text-4xl lg:text-5xl">
            Ons Assortiment
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {/* Vloertegels Card */}
            <div className="overflow-hidden rounded-lg bg-white shadow-lg">
              <div className="relative h-64">
                <Image
                  src={vloertegels}
                  alt="Vloertegels"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-semibold">Vloertegels</h3>
                <p className="text-gray-600">
                  Duurzame en stijlvolle vloertegels voor elke ruimte
                </p>
              </div>
            </div>

            {/* Wandtegels Card */}
            <div className="overflow-hidden rounded-lg bg-white shadow-lg">
              <div className="relative h-64">
                <Image
                  src={wandtegel}
                  alt="Wandtegels"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-semibold">Wandtegels</h3>
                <p className="text-gray-600">
                  Elegante wandtegels die uw interieur transformeren
                </p>
              </div>
            </div>

            {/* Mozaïek Card */}
            <div className="overflow-hidden rounded-lg bg-white shadow-lg">
              <div className="relative h-64">
                <Image
                  src={mosaic}
                  alt="Mozaïek"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-semibold">Mozaïek</h3>
                <p className="text-gray-600">
                  Creatieve mozaïektegels voor unieke accenten
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dealerschappen Sectie */}
      <section className="bg-gray-50 py-12 px-4 md:py-16 md:px-8 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-4 text-4xl font-bold text-black md:text-5xl">
            Dealerschappen
          </h2>
          <p className="mb-12 max-w-3xl text-lg text-gray-700">
            Wij werken samen met een zorgvuldig geselecteerd netwerk van
            gespecialiseerde dealers. Zij staan garant voor kwaliteit, service
            en vakmanschap.
          </p>
          <div className="grid gap-8 md:grid-cols-3">
            {/* CX cottoceramix */}
            <div className="rounded-lg bg-white p-6 shadow-md">
              <div className="relative mb-4 h-16 w-32">
                <Image
                  src={cottoceramix}
                  alt="CX cottoceramix logo"
                  fill
                  className="object-contain"
                  sizes="128px"
                />
              </div>
              <p className="mb-4 text-sm text-gray-600">
                Tegeldealer Cottoceramix levert een zorgvuldig samengesteld
                assortiment keramische tegels, met focus op kwaliteit en
                betrouwbaarheid.
              </p>
              <div className="flex items-center gap-2 text-gray-500">
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                <span className="text-sm">Instagram</span>
              </div>
            </div>

            {/* TMF the Mosaic factory */}
            <div className="rounded-lg bg-white p-6 shadow-md">
              <div className="relative mb-4 h-16 w-32">
                <Image
                  src={tmf}
                  alt="TMF the Mosaic factory logo"
                  fill
                  className="object-contain"
                  sizes="128px"
                />
              </div>
              <p className="mb-4 text-sm text-gray-600">
                The Mosaic Factory levert een uitgebreid, zorgvuldig geselecteerd
                assortiment mozaïektegels van hoge kwaliteit en vakmanschap.
              </p>
              <div className="flex items-center gap-2 text-gray-500">
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                <span className="text-sm">Instagram</span>
              </div>
            </div>

            {/* MAPEI */}
            <div className="rounded-lg bg-white p-6 shadow-md">
              <div className="relative mb-4 h-16 w-32">
                <Image
                  src={mapei}
                  alt="MAPEI logo"
                  fill
                  className="object-contain"
                  sizes="128px"
                />
              </div>
              <p className="mb-4 text-sm text-gray-600">
                Mapei levert hoogwaardige bouw- en tegelproducten, gespecialiseerd
                in lijmen, voegen en duurzame oplossingen voor tegels.
              </p>
              <div className="flex items-center gap-2 text-gray-500">
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                <span className="text-sm">Instagram</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Onze Merken Sectie */}
      <section className="bg-white py-12 px-4 md:py-16 md:px-8 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-8 text-4xl font-bold text-black md:text-5xl">
            onze merken
          </h2>
          <div className="relative">
            <button
              type="button"
              onClick={handleBrandPrevious}
              className="absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-gray-200 p-2 transition hover:bg-gray-300"
              aria-label="Vorige merk"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>
            <div className="flex items-center justify-center gap-8 overflow-hidden">
              {brands.map((brand, index) => (
                <div
                  key={brand.name}
                  className={`shrink-0 transition-opacity ${
                    index === brandIndex ? "opacity-100" : "opacity-50"
                  }`}
                >
                  <div className="relative h-24 w-32 flex items-center justify-center rounded">
                    <Image
                      src={brand.logo}
                      alt={`${brand.name} logo`}
                      fill
                      className="object-contain"
                      sizes="128px"
                    />
                  </div>
                </div>
              ))}
            </div>
            <button
              type="button"
              onClick={handleBrandNext}
              className="absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-gray-200 p-2 transition hover:bg-gray-300"
              aria-label="Volgende merk"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Kom bij ons langs Sectie */}
      <section className="bg-gray-50 py-12 px-4 md:py-16 md:px-8 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-4 text-4xl font-bold text-black md:text-5xl">
            Kom bij ons langs
          </h2>
          <p className="mb-8 text-lg text-gray-700">
            Bezoek onze showroom en ontdek zelf ons uitgebreide assortiment
            tegels en producten van topkwaliteit.
          </p>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="relative h-64 overflow-hidden rounded-lg md:h-80">
              <Image
                src={buitenimage}
                alt="Showroom exterieur"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div>
              <h3 className="mb-4 text-2xl font-semibold">openingstijden</h3>
              <div className="space-y-2 text-gray-700">
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
              <p className="mt-6 text-gray-700">
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
