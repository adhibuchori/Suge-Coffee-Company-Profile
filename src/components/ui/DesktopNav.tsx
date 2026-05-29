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
  return (
    <ul className="hidden md:flex gap-[2.2rem] m-0 p-0 list-none">
      {links.map((link) => (
        <li key={link.href}>
          <a
            href={link.href}
            className={cn(
              'text-[0.78rem] tracking-[0.12em] uppercase no-underline transition-all duration-300 relative group font-sans',
              scrolled ? 'text-muted hover:text-emerald' : 'text-white/85 hover:text-emerald',
              activeSection === link.href.slice(1) ? 'font-bold' : 'font-normal',
            )}
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  );
}
