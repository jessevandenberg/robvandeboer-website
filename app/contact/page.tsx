import Image from "next/image";

import Footer from "../components/Footer";
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
              "polygon(0% 100%, 0% 35%, 10% 40%, 20% 45%, 30% 50%, 40% 55%, 50% 60%, 60% 55%, 70% 50%, 80% 45%, 90% 40%, 100% 35%, 100% 100%)",
            background:
              "linear-gradient(to bottom, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.25) 50%, rgba(255, 255, 255, 0.35) 100%)",
            backdropFilter: "blur(2px)",
          }}
        />
      </section>

      {/* Content Sectie */}
      <section className="bg-white py-12 px-4 md:py-16 md:px-8 lg:px-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-3xl font-bold text-black md:mb-12 md:text-4xl lg:text-5xl">
            Neem contact met ons op
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="mb-4 text-2xl font-semibold">Contactgegevens</h3>
              <div className="space-y-4 text-gray-700">
                <div>
                  <p className="font-semibold">Telefoon</p>
                  <p>
                    <a href="tel:0412622720" className="hover:underline">
                      0412-622720
                    </a>
                  </p>
                </div>
                <div>
                  <p className="font-semibold">E-mail</p>
                  <p>
                    <a
                      href="mailto:info@robvandeboer.nl"
                      className="hover:underline"
                    >
                      info@robvandeboer.nl
                    </a>
                  </p>
                </div>
                <div>
                  <p className="font-semibold">Adres</p>
                  <p>Kantsingel 10</p>
                  <p>5349 AJ Oss</p>
                </div>
              </div>
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
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
