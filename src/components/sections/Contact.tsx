'use client';

import { RsvpForm, HampersForm } from './RsvpForm';
import { useContactTabs } from '@/hooks/useContactTabs';
import { ContactInfo } from '@/components/ui/ContactInfo';

export function Contact() {
  const { activeTab, setActiveTab, tabRefs, indicator } = useContactTabs();

  return (
    <section
      id="contact"
      className="bg-charcoal"
    >
      <div className="max-w-6xl mx-auto px-8 md:px-16 py-28 md:py-36">
        {/* Heading + Tab switcher */}
        <div className="reveal mb-16 md:mb-20">
          <h2 className="font-serif font-light leading-[1.15] text-[clamp(2.2rem,4.5vw,3.8rem)] text-[oklch(98%_0.006_90)]">
            Pesan{' '}
            <em className="italic text-[oklch(54%_0.1_162)]">
              {activeTab === 'reservasi' ? 'Meja' : 'Hampers Ramadhan'}
            </em>
          </h2>
          <div className="mt-5 flex gap-0 relative w-max">
            {(['reservasi', 'hampers'] as const).map((t) => (
              <button
                key={t}
                ref={(el) => {
                  tabRefs.current[t] = el;
                }}
                onClick={() => setActiveTab(t)}
                className="relative text-[0.72rem] tracking-[0.15em] uppercase py-2.5 px-5 border-none bg-transparent cursor-pointer transition-colors duration-300 outline-none font-sans"
                style={{
                  color: activeTab === t ? 'oklch(54% 0.1 162)' : 'oklch(50% 0.018 60)',
                  fontWeight: activeTab === t ? 600 : 400,
                }}
              >
                {t === 'reservasi' ? 'Reservasi' : 'Hampers Ramadhan'}
              </button>
            ))}
            <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-[oklch(98%_0.006_90/0.08)]" />
            <div
              className="absolute bottom-0 h-[2px] bg-[oklch(43%_0.09_162)] transition-all duration-300 ease-out"
              style={{ left: indicator.left, width: indicator.width }}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          {/* Left — contact info */}
          <div
            className="reveal"
            style={{ transitionDelay: '0.1s' }}
          >
            <p className="font-sans text-[0.92rem] leading-[1.9] text-[oklch(77%_0.04_80/0.7)] max-w-xs mb-14">
              {activeTab === 'reservasi'
                ? 'Ingin memastikan tempat duduk terbaik? Isi form reservasi atau hubungi kami langsung. Kami senang menyambut kedatangan Anda.'
                : 'Pesan hampers Ramadhan spesial dari Suge Coffee. Isi form atau hubungi kami langsung untuk info ketersediaan dan pengambilan.'}
            </p>
            <ContactInfo />
          </div>

          {/* Right — form */}
          <div
            className="reveal"
            style={{ transitionDelay: '0.2s' }}
          >
            {activeTab === 'reservasi' ? <RsvpForm dark /> : <HampersForm dark />}
          </div>
        </div>
      </div>
    </section>
  );
}
