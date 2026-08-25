import Logo from "./Logo";
import MobileNav from "./MobileNav";
import HeaderNav from "./HeaderNav";
import SafeImage from "./SafeImage";
import { getHomepageContent } from "@/lib/homepage";

export default async function Header() {
  const content = await getHomepageContent();
  const header = content.header;
  const heroImageSrc = content.heroImage || "/images/chichen-itza-hero.jpg";
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ];
  const ctaText = header.ctaText || header.bookNowText || "BOOK NOW";
  const rawCtaHref = header.ctaHref || "#tours";
  const ctaHref = rawCtaHref.startsWith("#") ? `/${rawCtaHref}` : rawCtaHref;

  return (
    <header className="sticky top-0 z-50 w-full border-none shadow-none transition-all duration-300 bg-[#F8F5EC] md:bg-transparent">
      {/* Hero Image in Header Background (Sky portion on desktop, seamless blend with Mayan Ivory) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <SafeImage
          src={heroImageSrc}
          alt="Chichen Itza Header Background"
          fill
          priority
          quality={90}
          sizes="100vw"
          className="hidden md:block object-cover object-[80%_0%] lg:object-[right_top]"
        />
        {/* Soft overlay matching hero Mayan Ivory background tone for crisp text legibility without borders */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#F8F5EC]/95 via-[#F8F5EC]/85 via-40% md:from-[#F8F5EC]/90 md:via-[#F8F5EC]/60 md:via-48% lg:via-50% to-transparent" />
      </div>

      <div className="relative z-10 mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-8">
        <Logo
          logoImage={header.logoImage}
          logoAlt={header.logoAlt || "Chichen Itza Tours"}
          line1={header.logoLine1 || "CHICHEN ITZA"}
          line2={header.logoLine2 || "— TOURS —"}
        />

        <HeaderNav links={navLinks} />

        <div className="flex items-center gap-3">
          <a
            href={ctaHref}
            className="hidden items-center gap-2 rounded-lg bg-[#073B2A] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-sm transition-all hover:bg-[#145A43] hover:shadow-md md:inline-flex"
          >
            {/* Calendar / Ticket Icon */}
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="#C58A2B"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4 shrink-0"
            >
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            <span>{ctaText.toUpperCase()}</span>
          </a>
          <MobileNav navLinks={navLinks} ctaText={ctaText} ctaHref={ctaHref} />
        </div>
      </div>
    </header>
  );
}
