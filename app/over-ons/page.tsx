import Image from "next/image";

import Footer from "../components/Footer";
import overOns1 from "../images/over ons1.png";
import overOns2 from "../images/over ons2.png";
import winkel1 from "../images/winkel 1.png";

const OverOns: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#D9D9D9]">
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
            Over Ons
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
      <section className="bg-[#D9D9D9] py-20 px-4 md:py-32 md:px-8 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 md:grid-cols-2 md:items-center md:gap-24">
            <div>
              <div className="space-y-10 text-base leading-loose text-gray-700 md:text-lg md:leading-9">
                <div>
                  <h3 className="mb-3 text-xl font-semibold text-black md:text-2xl">
                    Van Tegelboerke tot superspecialist
                  </h3>
                  <p>
                    Oudere Ossenaren weten het nog wel: als je vroeger tegels nodig
                    had, ging je naar het Tegelboerke. En eigenlijk is dat nog steeds
                    zo. Al zijn we in de loop er jaren wel flink gegroeid en hebben we
                    nu een assortiment waarvan ze vroeger alleen maar konden dromen.
                  </p>
                </div>
                <div>
                  <h3 className="mb-3 text-xl font-semibold text-black md:text-2xl">
                    Compleet assortiment
                  </h3>
                  <p>
                    Het is onze taak om u daarin wegwijs te maken. Dat doen we
                    allereerst door een compleet en eigentijds assortiment samen te
                    stellen. We kopen alles zelf in, ook vanuit het buitenland. We
                    willen immers zeker weten dat we kwaliteit in huis halen.
                    Bovendien kunnen we daardoor scherpe prijzen hanteren.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative h-96 overflow-hidden rounded-lg md:h-[500px]">
              <Image
                src={overOns2}
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
                src={overOns1}
                alt="Tegelassortiment close-up"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div>
              <div className="space-y-10 text-base leading-loose text-gray-700 md:text-lg md:leading-9">
                <div>
                  <h3 className="mb-3 text-xl font-semibold text-black md:text-2xl">
                    Advies en service
                  </h3>
                  <p>
                    Daarnaast besteden we veel aandacht aan advies en service. Het
                    houdt voor u immers niet op bij het kopen van de tegels. We geven
                    ook technisch advies en leveren alle benodigdheden voor het
                    zetwerk: van lijmen en voegsels tot hoekstrips. Schakelt u liever
                    een tegelzetter in? Dan hebben we enkele uitstekende adressen voor
                    u.
                  </p>
                </div>
                <div>
                  <h3 className="mb-3 text-xl font-semibold text-black md:text-2xl">
                    Familiebedrijf
                  </h3>
                  <p>
                    En zoals het gaat in een echt familiebedrijf: u krijgt advies van
                    de eigenaars zelf. Dat betekent: korte lijnen, grote betrokkenheid
                    en een eerlijk advies. We willen namelijk graag dat u de volgende
                    keer weer bij ons komt.
                  </p>
                  <p className="mt-4 font-semibold">
                    We zien u graag in onze showroom!
                  </p>
                  <p className="font-semibold">Erwin en Rian van den Berg</p>
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

export default OverOns;
