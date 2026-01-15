import Image from "next/image";

import Footer from "../components/Footer";
import buitenimage from "../images/buitentegelhandel.png";
import winkel1 from "../images/winkel 1.png";

const Contact: React.FC = () => {
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
            contact
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

      {/* Heeft u een vraag? Sectie */}
      <section className="bg-gray-100 py-12 px-4 md:py-16 md:px-8 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-black md:mb-16 md:text-4xl lg:text-5xl">
            Heeft u een vraag?
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {/* Bel ons */}
            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <svg
                  className="h-12 w-12 text-black md:h-14 md:w-14"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold text-black md:text-2xl">
                bel ons
              </h3>
              <p className="text-base leading-relaxed text-gray-900 md:text-lg">
                Tijdens openingstijden zijn wij bereikbaar op 0412-622720
              </p>
            </div>

            {/* Mail ons */}
            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <svg
                  className="h-12 w-12 text-black md:h-14 md:w-14"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold text-black md:text-2xl">
                mail ons
              </h3>
              <p className="text-base leading-relaxed text-gray-900 md:text-lg">
                Of mail ons en krijg binnen 24 uur reactie.
              </p>
            </div>

            {/* Showroom */}
            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <svg
                  className="h-12 w-12 text-black md:h-14 md:w-14"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold text-black md:text-2xl">
                showroom
              </h3>
              <p className="text-base leading-relaxed text-gray-900 md:text-lg">
                Bezoek onze showroom. Kom langs zonder afspraak.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Showroom Informatie Sectie */}
      <section className="bg-gray-100 py-12 px-4 md:py-16 md:px-8 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-2 md:items-start">
            {/* Afbeelding links */}
            <div className="relative h-96 overflow-hidden rounded-lg md:h-[500px]">
              <Image
                src={buitenimage}
                alt="Showroom exterieur"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Contact informatie rechts */}
            <div>
              <h2 className="mb-6 text-3xl font-bold text-black md:text-4xl lg:text-5xl">
                showroom
              </h2>
              <div className="space-y-4 text-base leading-relaxed text-gray-900 md:text-lg">
                {/* Telefoon */}
                <div className="flex items-start gap-3">
                  <svg
                    className="mt-1 h-5 w-5 shrink-0 text-black"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <span>0412-622720</span>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3">
                  <svg
                    className="mt-1 h-5 w-5 shrink-0 text-black"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span>info@robvandeboer.nl</span>
                </div>

                {/* Adres */}
                <div className="flex items-start gap-3">
                  <svg
                    className="mt-1 h-5 w-5 shrink-0 text-black"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span>Kantsingel 10, 5349 AJ Oss</span>
                </div>

                {/* Openingstijden */}
                <div className="mt-8">
                  <h3 className="mb-4 text-xl font-semibold text-black md:text-2xl">
                    openingstijden
                  </h3>
                  <div className="space-y-2">
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

export default Contact;
