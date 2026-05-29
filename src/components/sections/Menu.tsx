'use client';

import { cn } from '@/lib/utils';
import { useMenuTab } from '@/hooks/useMenuTab';
import { MenuGridDrinks } from '@/components/ui/MenuGridDrinks';
import { MenuGridFood } from '@/components/ui/MenuGridFood';

export function Menu() {
  const { activeTab, setActiveTab } = useMenuTab();

  return (
    <section
      id="menu"
      className="relative py-24 px-4 md:px-8 bg-cream overflow-hidden"
    >
      {/* Emerald watercolor wash */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1050px] h-[800px] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at center, oklch(43% 0.09 162 / 0.06) 0%, oklch(43% 0.09 162 / 0.02) 40%, transparent 68%)',
        }}
      />

      {/* Emerald glow — bottom-right corner */}
      <div
        className="absolute -bottom-12 -right-12 w-64 h-64 rounded-full pointer-events-none hidden lg:block"
        style={{
          background: 'radial-gradient(circle, oklch(43% 0.09 162 / 0.05) 0%, transparent 60%)',
        }}
      />

      <div className="reveal max-w-[1200px] mx-auto mb-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
        <div>
          <h2 className="font-light leading-[1.15] text-[clamp(2.2rem,4.5vw,3.8rem)] font-serif text-ink">
            Pilihan <em className="italic text-emerald">Sajian</em>
          </h2>
        </div>

        {/* Tab switcher + download button */}
        <div className="flex flex-col md:flex-row md:items-center gap-4 w-full md:w-auto">
          <div className="flex gap-0 relative w-full md:w-auto">
            {(['drinks', 'food'] as const).map((t) => (
              <button
                key={t}
                onClick={() => setActiveTab(t)}
                className={cn(
                  'relative flex-1 md:flex-none text-[0.78rem] tracking-[0.15em] uppercase py-3 px-6 border-none bg-transparent cursor-pointer transition-colors duration-300 outline-none font-sans',
                  activeTab === t
                    ? 'text-emerald font-semibold'
                    : 'text-muted font-medium hover:text-emerald/70',
                )}
              >
                {t === 'drinks' ? 'Minuman' : 'Makanan'}
              </button>
            ))}
            <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-charcoal/10" />
            <div
              className="absolute bottom-0 h-[2px] bg-emerald w-1/2 transition-transform duration-300 ease-out"
              style={{ transform: activeTab === 'drinks' ? 'translateX(0)' : 'translateX(100%)' }}
            />
          </div>
          <a
            href="https://drive.google.com/drive/folders/1mHLu1HPBHtTXQcP7TyggOYhwlyBPG8KD"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-4 py-2 border border-emerald/40 text-emerald hover:bg-emerald hover:text-cream transition-all duration-200 font-sans text-[0.68rem] tracking-[0.15em] uppercase rounded-sm w-full md:w-auto"
          >
            <svg
              width={12}
              height={12}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.8}
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              className="shrink-0"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line
                x1="12"
                y1="15"
                x2="12"
                y2="3"
              />
            </svg>
            <span>Download Menu</span>
          </a>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        {activeTab === 'drinks' && <MenuGridDrinks />}
        {activeTab === 'food' && <MenuGridFood />}
        <div className="mt-6 flex flex-col gap-1">
          <p className="font-sans text-[0.82rem] text-muted/80 italic">
            *All prices are before tax
          </p>
          <p className="font-sans text-[0.82rem] text-muted/80 italic">
            *Please kindly ask our staff for extra condiment (e.g. chili powder, chili sauce)
          </p>
        </div>
      </div>
    </section>
  );
}
