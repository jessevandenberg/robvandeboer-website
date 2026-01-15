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
          <h1 className="text-4xl font-bold text-white drop-shadow-lg sm:text-5xl md:text-7xl lg:text-8xl">
            showroom
          </h1>
        </div>

        {/* Diagonale overlay onderaan met clip-path (punt wijst naar beneden) */}
        <div
          className="absolute bottom-0 left-0 right-0 z-10 h-[25vh] pointer-events-none"
          style={{
            clipPath:
              "polygon(0% 100%, 0% 35%, 5% 38%, 10% 42%, 20% 48%, 30% 55%, 40% 62%, 50% 70%, 60% 62%, 70% 55%, 80% 48%, 90% 42%, 95% 38%, 100% 35%, 100% 100%)",
            background:
              "linear-gradient(to bottom, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.5) 50%, rgba(255, 255, 255, 0.6) 100%)",
            backdropFilter: "blur(2px)",
          }}
        />
      </section>

      {/* Eerste deel Content Sectie */}
      <section className="bg-gray-100 py-20 px-4 md:py-32 md:px-8 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 md:grid-cols-2 md:items-center md:gap-24">
            <div>
              <div className="space-y-10 text-base leading-loose text-gray-900 md:text-lg md:leading-9">
                <div>
                  <h3 className="mb-3 text-xl font-semibold text-black md:text-2xl">
                    Groot assortiment
                  </h3>
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
                <div>
                  <h3 className="mb-3 text-xl font-semibold text-black md:text-2xl">
                    Grote voorraad
                  </h3>
                  <p>
                    Het grootste deel van onze collectie houden we op voorraad voor
                    directe levering. Artikelen die u uit de catalogus bestelt, worden
                    ook snel geleverd.
                  </p>
                </div>
                <div>
                  <h3 className="mb-3 text-xl font-semibold text-black md:text-2xl">
                    Monster meenemen
                  </h3>
                  <p>
                    Hoewel wij beschikken over speciale daglichtlampen om tegels te
                    beoordelen, is de beste beoordeling toch thuis te maken. Wij raden
                    u daarom aan om monsters mee te nemen.
                  </p>
                </div>
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

      {/* Tweede deel Content Sectie met grijze achtergrond */}
      <section className="bg-[#D9D9D9] py-20 px-4 md:py-32 md:px-8 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 md:grid-cols-2 md:items-center md:gap-24">
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
              <div className="space-y-10 text-base leading-loose text-gray-900 md:text-lg md:leading-9">
                <div>
                  <h3 className="mb-3 text-xl font-semibold text-black md:text-2xl">
                    Acties
                  </h3>
                  <p>
                    Kom regelmatig een kijkje nemen in onze actiehoek. Hier vindt u
                    altijd scherpe deals op uitstekende restanten en overproductie van
                    onze leveranciers.
                  </p>
                </div>
                <div>
                  <h3 className="mb-3 text-xl font-semibold text-black md:text-2xl">
                    Schoonmaakmiddelen
                  </h3>
                  <p>
                    Het onderhouden van uw tegels is belangrijk voor zowel het uiterlijk
                    als de levensduur. Wij verkopen gespecialiseerde schoonmaakmiddelen
                    en geven graag advies over het schoonmaken van uw tegels.
                  </p>
                </div>
                <div>
                  <h3 className="mb-3 text-xl font-semibold text-black md:text-2xl">
                    Monster meenemen
                  </h3>
                  <p>
                    Hoewel wij beschikken over speciale daglichtlampen om tegels te
                    beoordelen, is de beste beoordeling toch thuis te maken. Wij raden
                    u daarom aan om monsters mee te nemen.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Showroom;
