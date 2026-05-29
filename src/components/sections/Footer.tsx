import Image from 'next/image';
import { FooterBottomBar } from '@/components/ui/FooterBottomBar';

export function Footer() {
  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#menu', label: 'Menu' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#location', label: 'Location' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <footer className="bg-[oklch(14%_0.007_162)] border-t border-[oklch(98%_0.006_90/0.06)]">
      <div className="max-w-6xl mx-auto px-8 md:px-16 py-16 md:py-20">
        {/* Three-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 items-start">
          {/* Left — navigation */}
          <nav aria-label="Footer navigation">
            <p className="font-sans text-[0.6rem] tracking-[0.2em] uppercase text-[oklch(50%_0.018_60)] mb-5">
              Navigasi
            </p>
            <ul className="flex flex-col gap-3 list-none p-0 m-0">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="font-sans text-[0.8rem] tracking-[0.06em] text-[oklch(77%_0.04_80/0.6)] hover:text-[oklch(54%_0.1_162)] transition-colors duration-200 no-underline"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Center — brand identity */}
          <div className="flex flex-col items-start md:items-center text-left md:text-center">
            <Image
              src="/suge-coffee-logo.png"
              alt="Suge Coffee & Eatery"
              width={36}
              height={44}
              className="object-contain brightness-0 invert opacity-80"
            />
            <span className="font-serif italic text-[3rem] text-[oklch(98%_0.006_90)] mt-2 leading-none">
              Suge
            </span>
            <span className="block font-sans text-[0.62rem] tracking-[0.22em] uppercase text-[oklch(50%_0.018_60)] mt-6">
              Coffee &amp; Eatery
            </span>
            <div className="w-12 h-px bg-[oklch(50%_0.018_60/0.4)] mt-5" />
            <span className="block font-sans text-[0.62rem] tracking-[0.22em] uppercase text-[oklch(50%_0.018_60)] mt-4">
              All is Well
            </span>
            <span
              className="block font-jp text-[1.4rem] tracking-[0.3em] text-[oklch(43%_0.09_162)] leading-none mt-6"
              aria-hidden="true"
            >
              すごい
            </span>
          </div>

          {/* Right — hours + social */}
          <div className="flex flex-col items-start md:items-end">
            <p className="font-sans text-[0.6rem] tracking-[0.2em] uppercase text-[oklch(50%_0.018_60)] mb-5">
              Info
            </p>
            <p className="font-sans text-[0.8rem] tabular-nums text-[oklch(77%_0.04_80/0.6)] leading-[1.8] text-right">
              Setiap hari
              <br />
              09.00 – 22.00 WIB
            </p>
            <a
              href="https://api.whatsapp.com/send/?phone=6281319436485&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 flex items-center gap-2 font-sans text-[0.8rem] text-[oklch(77%_0.04_80/0.6)] hover:text-[oklch(54%_0.1_162)] transition-colors duration-200 no-underline"
            >
              <svg
                width={13}
                height={13}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.87a16 16 0 0 0 6 6l1.27-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              +62 813-1943-6485
            </a>
            <a
              href="https://instagram.com/sugecoffee"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 flex items-center gap-2 font-sans text-[0.8rem] text-[oklch(77%_0.04_80/0.6)] hover:text-[oklch(54%_0.1_162)] transition-colors duration-200 no-underline"
            >
              <svg
                width={13}
                height={13}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect
                  x="2"
                  y="2"
                  width="20"
                  height="20"
                  rx="5"
                  ry="5"
                />
                <circle
                  cx="12"
                  cy="12"
                  r="4"
                />
                <circle
                  cx="17.5"
                  cy="6.5"
                  r="0.5"
                  fill="currentColor"
                  stroke="none"
                />
              </svg>
              @sugecoffee
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <FooterBottomBar />
      </div>
    </footer>
  );
}
