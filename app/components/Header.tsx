import Image from "next/image";
import Link from "next/link";

import logoImage from "../images/logo.png";

const Header: React.FC = () => {
  return (
    <header className="absolute inset-x-0 top-0 z-20 flex h-16 items-center justify-between bg-white/40 px-4 text-black backdrop-blur-sm md:h-20 md:px-8">
      <Link href="/" className="relative flex h-full items-end">
        <Image
          src={logoImage}
          alt="Tegelhandel Rob v.d. Boer logo"
          className="h-full w-auto translate-y-2 object-contain scale-110 md:scale-125 md:translate-y-4"
          priority
        />
      </Link>

      <nav className="flex items-center gap-4 text-sm font-medium uppercase tracking-wide md:gap-6 md:text-base">
        <Link
          href="/assortiment"
          className="transition-colors hover:text-gray-700"
        >
          assortiment
        </Link>
        <Link
          href="/showroom"
          className="transition-colors hover:text-gray-700"
        >
          showroom
        </Link>
        <Link
          href="/over-ons"
          className="transition-colors hover:text-gray-700"
        >
          over ons
        </Link>
        <Link
          href="/contact"
          className="transition-colors hover:text-gray-700"
        >
          contact
        </Link>
      </nav>
    </header>
  );
};

export default Header;
