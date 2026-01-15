import Image from "next/image";

import Footer from "../components/Footer";
import showroom1 from "../images/showroom1.png";
import showroom2 from "../images/showroom2.png";
import winkel1 from "../images/winkel 1.png";

const Showroom: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
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
            showroom
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

      {/* Groot assortiment Sectie */}
      <section className="bg-gray-100 py-12 px-4 md:py-16 md:px-8 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <h2 className="mb-8 text-3xl font-bold text-black md:mb-10 md:text-4xl lg:text-5xl">
              Groot assortiment
            </h2>
            <div className="space-y-6 text-base leading-relaxed text-gray-700 md:text-lg md:leading-8">
              <p>
                Onze showroom biedt een uitgebreide collectie keramische wandtegels,
                vloertegels en mozaïek. Wij zijn gespecialiseerd in keramische
                tegels, niet in natuursteen. Ons assortiment is zeer gevarieerd en
                loopt uiteen van klein tot groot formaat, klassiek tot modern en
                subtiel tot opvallend. Onze tegels worden geleverd door gerenommeerde
                fabrikanten uit Italië, Spanje, Portugal, Duitsland en de Emiraten.
                De collectie wordt op een overzichtelijke manier gepresenteerd.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Grote voorraad Sectie */}
      <section className="bg-gray-100 py-12 px-4 md:py-16 md:px-8 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-black md:mb-8 md:text-4xl lg:text-5xl">
                Grote voorraad
              </h2>
              <div className="space-y-6 text-base leading-relaxed text-gray-700 md:text-lg md:leading-8">
                <p>
                  Het grootste deel van onze collectie houden we op voorraad voor
                  directe levering. Artikelen die u uit de catalogus bestelt, worden
                  ook snel geleverd.
                </p>
              </div>
            </div>
            <div className="relative h-96 overflow-hidden rounded-lg md:h-[500px]">
              <Image
                src={showroom2}
                alt="Showroom met tegelassortiment"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Monster meenemen Sectie */}
      <section className="bg-gray-100 py-12 px-4 md:py-16 md:px-8 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <h2 className="mb-8 text-3xl font-bold text-black md:mb-10 md:text-4xl lg:text-5xl">
              Monster meenemen
            </h2>
            <div className="space-y-6 text-base leading-relaxed text-gray-700 md:text-lg md:leading-8">
              <p>
                Hoewel wij beschikken over speciale daglichtlampen om tegels te
                beoordelen, is de beste beoordeling toch thuis te maken. Wij raden
                u daarom aan om monsters mee te nemen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Acties Sectie */}
      <section className="bg-gray-100 py-12 px-4 md:py-16 md:px-8 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div className="relative h-96 overflow-hidden rounded-lg md:h-[500px]">
              <Image
                src={showroom1}
                alt="Tegelmonsters close-up"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div>
              <h2 className="mb-6 text-3xl font-bold text-black md:mb-8 md:text-4xl lg:text-5xl">
                Acties
              </h2>
              <div className="space-y-6 text-base leading-relaxed text-gray-700 md:text-lg md:leading-8">
                <p>
                  Kom regelmatig een kijkje nemen in onze actiehoek. Hier vindt u
                  altijd scherpe deals op uitstekende restanten en overproductie van
                  onze leveranciers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schoonmaakmiddelen Sectie */}
      <section className="bg-gray-100 py-12 px-4 md:py-16 md:px-8 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <h2 className="mb-8 text-3xl font-bold text-black md:mb-10 md:text-4xl lg:text-5xl">
              Schoonmaakmiddelen
            </h2>
            <div className="space-y-6 text-base leading-relaxed text-gray-700 md:text-lg md:leading-8">
              <p>
                Het onderhouden van uw tegels is belangrijk voor zowel het uiterlijk
                als de levensduur. Wij verkopen gespecialiseerde schoonmaakmiddelen
                en geven graag advies over het schoonmaken van uw tegels.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Showroom;
