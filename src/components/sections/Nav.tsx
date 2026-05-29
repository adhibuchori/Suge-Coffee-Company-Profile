'use client';

import { useScrollPosition } from '@/hooks/useScrollPosition';
import { useActiveSection } from '@/hooks/useActiveSection';
import { useBodyScrollLock } from '@/hooks/useBodyScrollLock';
import { useUiStore } from '@/store/ui-store';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { DesktopNav } from '@/components/ui/DesktopNav';

const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#menu', label: 'Menu' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#location', label: 'Location' },
  { href: '#contact', label: 'Contact' },
] as const;

export function Nav() {
  const { scrolled } = useScrollPosition(60);
  const { mobileMenuOpen, toggleMobileMenu, setMobileMenuOpen } = useUiStore();
  const activeSection = useActiveSection(NAV_LINKS.map((l) => l.href.slice(1)));
  useBodyScrollLock(mobileMenuOpen);

  return (
    <>
      <nav
        id="mainNav"
        className={cn(
          'fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-8 md:px-16 py-[1.4rem] transition-all duration-400',
          mobileMenuOpen
            ? 'bg-[var(--emerald-dark)]'
            : scrolled
              ? 'bg-[rgba(250,248,244,0.55)] backdrop-blur-xl backdrop-saturate-150 shadow-[0_1px_0_rgba(0,0,0,0.06)] border-b border-white/30'
              : 'bg-transparent',
        )}
      >
        <a
          href="#hero"
          aria-label="Suge Coffee & Eatery — Beranda"
          className="no-underline flex items-center gap-4"
        >
          <Image
            src="/suge-coffee-logo.png"
            alt=""
            width={20}
            height={24}
            style={{ width: 'auto', height: 'auto' }}
            className={cn(
              'transition-all duration-300 object-contain shrink-0',
              scrolled && !mobileMenuOpen
                ? 'brightness-[0.35] sepia saturate-[3] hue-rotate-[100deg]'
                : 'brightness-0 invert',
            )}
            priority
          />
          <span
            className={cn(
              'transition-colors duration-300',
              scrolled && !mobileMenuOpen ? 'text-emerald-dark' : 'text-white',
            )}
          >
            <span className="block text-[1.5rem] font-semibold tracking-[0.04em] font-serif leading-none">
              Suge
            </span>
            <span className="block font-sans font-normal text-[0.55rem] tracking-[0.18em] uppercase opacity-70 leading-none mt-2">
              Coffee &amp; Eatery
            </span>
          </span>
        </a>
        <DesktopNav
          links={NAV_LINKS}
          scrolled={scrolled}
          activeSection={activeSection}
        />
        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-[6px] bg-transparent border-none cursor-pointer p-0"
          onClick={toggleMobileMenu}
          aria-label={mobileMenuOpen ? 'Tutup menu' : 'Buka menu'}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobileMenu"
        >
          <span
            className={cn(
              'block w-6 h-[1.5px] transition-all duration-300 origin-center',
              scrolled && !mobileMenuOpen ? 'bg-ink' : 'bg-white',
              mobileMenuOpen && 'translate-y-[7.5px] rotate-45',
            )}
          />
          <span
            className={cn(
              'block w-6 h-[1.5px] transition-all duration-300',
              scrolled && !mobileMenuOpen ? 'bg-ink' : 'bg-white',
              mobileMenuOpen && 'opacity-0 scale-x-0',
            )}
          />
          <span
            className={cn(
              'block w-6 h-[1.5px] transition-all duration-300 origin-center',
              scrolled && !mobileMenuOpen ? 'bg-ink' : 'bg-white',
              mobileMenuOpen && '-translate-y-[7.5px] -rotate-45',
            )}
          />
        </button>
      </nav>

      {/* Mobile drawer */}
      <dialog
        id="mobileMenu"
        aria-label="Navigasi"
        open={mobileMenuOpen}
        className={cn(
          'fixed inset-0 z-[99] flex flex-col justify-center items-center md:hidden transition-all duration-500 w-full h-full max-w-none max-h-none m-0 p-0 border-none',
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none',
        )}
        style={{ background: 'var(--emerald-dark)' }}
      >
        <ul className="flex flex-col items-center gap-10 m-0 p-0 list-none">
          {NAV_LINKS.map((link, i) => (
            <li
              key={link.href}
              style={{
                transitionDelay: mobileMenuOpen ? `${i * 60}ms` : '0ms',
                transform: mobileMenuOpen ? 'translateY(0)' : 'translateY(16px)',
                opacity: mobileMenuOpen ? 1 : 0,
                transitionProperty: 'transform, opacity',
                transitionDuration: '0.4s',
                transitionTimingFunction: 'cubic-bezier(.22,1,.36,1)',
              }}
            >
              <a
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-serif font-light text-[2.5rem] tracking-[-0.01em] no-underline text-white/85 hover:text-white transition-colors duration-300"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <span
          className="absolute bottom-10 font-jp text-[1.8rem] text-white/20"
          style={{ letterSpacing: '0.3em' }}
        >
          すごい
        </span>
      </dialog>
    </>
  );
}
