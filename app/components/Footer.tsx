import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#D9D9D9] text-black">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-8 lg:px-16">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Sitemap */}
          <div>
            <h3 className="mb-4 text-lg font-semibold uppercase">sitemap</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/assortiment" className="hover:underline">
                  assortiment
                </Link>
              </li>
              <li>
                <Link href="/showroom" className="hover:underline">
                  showroom
                </Link>
              </li>
              <li>
                <Link href="/over-ons" className="hover:underline">
                  over ons
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline">
                  contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Showroom */}
          <div>
            <h3 className="mb-4 text-lg font-semibold uppercase">showroom</h3>
            <p className="mb-2 text-sm">kantsingel 10, 5349 AJ Oss</p>
            <div className="space-y-1 text-sm">
              <p>openingstijden</p>
              <p>ma 13:00u-17:30u</p>
              <p>di-vr 9:00u-17:30u</p>
              <p>za 9:00-16:00u</p>
            </div>
          </div>

          {/* Voor informatie */}
          <div>
            <h3 className="mb-4 text-lg font-semibold uppercase">
              voor informatie
            </h3>
            <div className="space-y-2 text-sm">
              <p>0412-622720</p>
              <p>info@robvandeboer.nl</p>
              <p>tegelhandelrobvandeboer</p>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-400 pt-8 text-center text-sm">
          <p>COPYRIGHT 2026 | Rob de boer | E: info@robvandeboer.nl</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
