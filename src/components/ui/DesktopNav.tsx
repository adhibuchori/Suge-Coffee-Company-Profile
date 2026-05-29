'use client';

import { cn } from '@/lib/utils';

export function DesktopNav({
  links,
  scrolled,
  activeSection,
}: {
  links: readonly { href: string; label: string }[];
  scrolled: boolean;
  activeSection: string;
}) {
  const hasActive = activeSection !== '';
  return (
    <ul className="hidden md:flex gap-[2.2rem] m-0 p-0 list-none">
      {links.map((link) => {
        const isActive = activeSection === link.href.slice(1);
        return (
          <li key={link.href}>
            <a
              href={link.href}
              className={cn(
                'text-[0.78rem] tracking-[0.12em] uppercase no-underline font-sans font-normal hover:opacity-100 transition-all duration-300',
                scrolled ? 'text-muted hover:text-emerald' : 'text-white/85 hover:text-white',
              )}
              style={{
                opacity: hasActive && !isActive ? 0.6 : 1,
              }}
            >
              {link.label}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
