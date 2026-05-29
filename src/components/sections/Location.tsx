import { Wifi, ParkingCircle, Plug, Bike, MapPin } from 'lucide-react';

export function Location() {
  const facilities = [
    { icon: Wifi, label: 'WiFi', value: 'Tersedia gratis' },
    { icon: ParkingCircle, label: 'Parkir', value: 'Area parkir luas' },
    { icon: Plug, label: 'Power Outlet', value: 'Tersedia di area tertentu' },
    { icon: Bike, label: 'Delivery', value: 'GrabFood · GoFood' },
  ];

  return (
    <section
      id="location"
      className="overflow-hidden grid grid-cols-1 md:grid-cols-2 min-h-[600px]"
    >
      {/* Left — charcoal info panel */}
      <div className="reveal bg-[oklch(14%_0.007_162)] px-10 md:px-16 py-20 md:py-28 flex flex-col justify-between">
        <div>
          <h2 className="font-serif font-light leading-[1.15] text-[clamp(2rem,3.5vw,3.2rem)] text-[oklch(98%_0.006_90)]">
            Temukan <em className="italic text-[oklch(54%_0.1_162)]">Suge</em>
          </h2>

          <p className="mt-6 font-sans text-[0.88rem] leading-[1.9] text-[oklch(77%_0.04_80/0.65)]">
            Jl. Bintaro Tengah No. 48
            <br />
            Sektor 1, Bintaro
            <br />
            Jakarta Selatan 12330
          </p>

          {/* Hours + facilities */}
          <div className="mt-10 border-t border-[oklch(98%_0.006_90/0.08)]">
            <div className="flex justify-between items-baseline py-4 border-b border-[oklch(98%_0.006_90/0.08)]">
              <span className="font-sans text-[0.68rem] tracking-[0.15em] uppercase text-[oklch(43%_0.09_162)] font-[500]">
                Senin – Minggu
              </span>
              <span className="font-sans text-[0.8rem] tabular-nums text-[oklch(98%_0.006_90/0.8)]">
                09.00 – 22.00 WIB
              </span>
            </div>
            {facilities.map((f) => (
              <div
                key={f.label}
                className="flex justify-between items-center py-3.5 border-b border-[oklch(98%_0.006_90/0.06)]"
              >
                <span className="flex items-center gap-2.5 font-sans text-[0.65rem] tracking-[0.15em] uppercase text-[oklch(50%_0.018_60)]">
                  <f.icon
                    size={12}
                    strokeWidth={1.5}
                  />
                  {f.label}
                </span>
                <span className="font-sans text-[0.8rem] text-[oklch(77%_0.04_80/0.65)]">
                  {f.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <a
          href="https://maps.google.com/?q=Suge+Coffee+Eatery+Bintaro"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-12 inline-flex items-center gap-3 font-sans text-[0.68rem] tracking-[0.18em] uppercase text-[oklch(43%_0.09_162)] hover:gap-5 transition-all duration-300 no-underline"
        >
          <MapPin
            size={12}
            strokeWidth={1.5}
          />
          Buka di Google Maps
          <span
            className="block w-8 h-px bg-[oklch(43%_0.09_162)] transition-all duration-300"
            aria-hidden="true"
          />
        </a>
      </div>

      {/* Right — map bleeding full height */}
      <div
        className="reveal relative min-h-[420px] md:min-h-0"
        style={{ transitionDelay: '0.1s' }}
      >
        {/* Fallback */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-[oklch(20%_0.007_162)]"
          aria-hidden="true"
        >
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'linear-gradient(oklch(43% 0.09 162 / 0.1) 1px, transparent 1px), linear-gradient(90deg, oklch(43% 0.09 162 / 0.1) 1px, transparent 1px)',
              backgroundSize: '32px 32px',
            }}
          />
          <MapPin
            size={28}
            strokeWidth={1}
            className="relative z-10 text-emerald"
            style={{ opacity: 0.5 }}
          />
          <span className="relative z-10 font-sans text-[0.62rem] tracking-[0.2em] uppercase text-[oklch(43%_0.09_162/0.7)]">
            Suge Coffee &amp; Eatery
          </span>
          <span className="relative z-10 font-sans text-[0.55rem] tracking-[0.12em] text-[oklch(77%_0.04_80/0.4)]">
            Bintaro, Jakarta Selatan
          </span>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.9334141950085!2d106.7530475!3d-6.272486499999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1f642b71f29%3A0x64c8e6c2420f717c!2sSuge%20Coffee%20%26%20Eatery!5e0!3m2!1sen!2sid!4v1779999065669!5m2!1sen!2sid"
          width="100%"
          height="100%"
          style={{ border: 0, display: 'block', position: 'absolute', inset: 0, zIndex: 10 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Lokasi Suge Coffee & Eatery"
          sandbox="allow-scripts allow-popups allow-popups-to-escape-sandbox"
        />
      </div>
    </section>
  );
}
