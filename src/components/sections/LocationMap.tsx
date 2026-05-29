export function LocationMap() {
  return (
    <div
      className="reveal"
      style={{ transitionDelay: '0.15s' }}
    >
      {/* Map placeholder */}
      <div
        className="w-full relative overflow-hidden flex items-center justify-center"
        style={{
          aspectRatio: '4/3',
          background: 'linear-gradient(145deg, #C8D8D0 0%, #B0C8BE 100%)',
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(45,106,90,0.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(45,106,90,0.08) 1px, transparent 1px)
            `,
            backgroundSize: '32px 32px',
          }}
        />
        <div className="relative z-[1] text-center">
          <div
            className="w-4 h-4 rounded-full mx-auto"
            style={{
              background: 'var(--emerald)',
              animation: 'pinPulse 2s ease-in-out infinite',
            }}
          />
          <div
            className="text-[0.72rem] tracking-[0.1em] mt-2 font-medium"
            style={{ fontFamily: 'var(--sans)', color: 'var(--emerald-dark)' }}
          >
            Suge Coffee &amp; Eatery
          </div>
        </div>
      </div>

      {/* Address */}
      <div
        className="mt-6 py-5 px-6"
        style={{
          background: 'var(--white)',
          borderLeft: '3px solid var(--emerald)',
        }}
      >
        <p
          className="text-[0.9rem] leading-[1.7]"
          style={{ color: 'var(--muted)' }}
        >
          Jl. Bintaro Tengah No. 48
          <br />
          Sektor 1, Bintaro
          <br />
          Jakarta Selatan 12330
        </p>
        <a
          href="https://maps.google.com/?q=Suge+Coffee+Eatery+Bintaro"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-3 text-[0.75rem] tracking-[0.12em] uppercase font-medium no-underline hover:underline"
          style={{ color: 'var(--emerald)' }}
        >
          Buka di Google Maps →
        </a>
      </div>
    </div>
  );
}
