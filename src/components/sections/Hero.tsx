'use client';

/** Hero section — full-viewport, emerald gradient with wooden slat texture. */
import Image from 'next/image';

export function Hero() {
  return (
    <section
      id="hero"
      className="relative h-screen min-h-[640px] flex items-center justify-center overflow-hidden"
    >
      {/* Hero photograph */}
      <Image
        src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1600&q=85"
        alt="Interior Suge Coffee & Eatery — ruang yang tenang dan hangat di Bintaro"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Warm dark vignette — preserves text legibility */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(175deg, rgba(28,74,63,0.78) 0%, rgba(15,37,32,0.72) 55%, rgba(10,24,20,0.82) 100%)',
        }}
      />

      {/* Wooden slat ceiling pattern */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage:
            'repeating-linear-gradient(90deg, transparent 0px, transparent 28px, rgba(0, 0, 0, 0.18) 28px, rgba(0, 0, 0, 0.18) 32px)',
        }}
      />

      {/* Content */}
      <div
        className="relative z-[2] text-center px-6 flex flex-col items-center"
        style={{ animation: 'heroIn 1.2s cubic-bezier(.22,1,.36,1) both' }}
      >
        <span
          className="block mb-5"
          style={{
            fontFamily: 'var(--jp)',
            fontSize: '0.95rem',
            fontWeight: 300,
            letterSpacing: '0.35em',
            color: 'var(--stone)',
            animation: 'heroIn 1.2s 0.2s both cubic-bezier(.22,1,.36,1)',
          }}
        >
          すごい
        </span>

        <h1
          className="font-light leading-none tracking-[-0.01em] text-[var(--white)]"
          style={{
            fontFamily: 'var(--serif)',
            fontSize: 'clamp(3.5rem, 9vw, 8rem)',
            animation: 'heroIn 1.2s 0.35s both cubic-bezier(.22,1,.36,1)',
          }}
        >
          Suge
        </h1>

        <div
          className="w-[60px] h-[1px] mx-auto my-7"
          style={{
            background: 'var(--stone)',
            animation: 'heroIn 1.2s 0.5s both cubic-bezier(.22,1,.36,1)',
          }}
        />

        <p
          className="text-[0.82rem] font-light tracking-[0.25em] uppercase text-[rgba(255,255,255,0.6)]"
          style={{
            fontFamily: 'var(--sans)',
            animation: 'heroIn 1.2s 0.6s both cubic-bezier(.22,1,.36,1)',
          }}
        >
          Coffee & Eatery
        </p>

        <p
          className="mt-6 text-[0.92rem] font-light leading-[1.9] text-[rgba(255,255,255,0.55)] max-w-sm text-center"
          style={{
            fontFamily: 'var(--sans)',
            animation: 'heroIn 1.2s 0.68s both cubic-bezier(.22,1,.36,1)',
          }}
        >
          Ruang untuk bersantai, berkarya, dan menikmati setiap tegukan.
        </p>

        <div
          className="mt-10 flex items-center gap-4"
          style={{ animation: 'heroIn 1.2s 0.75s both cubic-bezier(.22,1,.36,1)' }}
        >
          <a
            href="#menu"
            className="inline-block px-10 py-[0.85rem] border border-white/45 uppercase no-underline transition-all duration-300 hover:bg-white hover:text-emerald-dark hover:border-white text-white font-sans text-[0.75rem] tracking-[0.18em]"
          >
            Lihat Menu
          </a>
          <a
            href="#contact"
            className="inline-block px-10 py-[0.85rem] bg-white/10 border border-white/20 uppercase no-underline transition-all duration-300 hover:bg-white hover:text-emerald-dark hover:border-white text-white font-sans text-[0.75rem] tracking-[0.18em]"
          >
            Reservasi
          </a>
        </div>
      </div>

      {/* Bottom info bar */}
      <div
        className="absolute bottom-10 left-8 md:left-16 flex flex-col gap-1 z-[2]"
        style={{ animation: 'heroIn 1.2s 1s both cubic-bezier(.22,1,.36,1)' }}
      >
        <span className="font-sans text-[0.62rem] tracking-[0.18em] uppercase text-white/40">
          Bintaro, Jakarta Selatan
        </span>
        <span className="font-sans text-[0.62rem] tracking-[0.18em] uppercase text-white/40">
          Buka 09.00 – 22.00
        </span>
      </div>

      {/* Scroll hint */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-45"
        style={{ animation: 'heroIn 1.2s 1s both cubic-bezier(.22,1,.36,1)' }}
        aria-hidden="true"
      >
        <span
          className="text-[0.65rem] tracking-[0.2em] uppercase text-[var(--white)]"
          style={{ fontFamily: 'var(--sans)' }}
        >
          Scroll
        </span>
        <div
          className="w-[1px] h-12"
          style={{
            background: 'linear-gradient(to bottom, rgba(255,255,255,0.6), transparent)',
            animation: 'scrollPulse 2s ease-in-out infinite',
          }}
        />
      </div>
    </section>
  );
}
