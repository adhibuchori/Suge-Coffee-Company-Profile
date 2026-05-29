import Image from 'next/image';

export function About() {
  const stats = [
    { value: '2022', label: 'Berdiri' },
    { value: '3+', label: 'Tahun meracik' },
    { value: '40+', label: 'Pilihan sajian' },
    { value: '1', label: 'Blend eksklusif' },
  ];

  return (
    <section
      id="about"
      className="bg-[oklch(94%_0.012_80)] overflow-hidden"
    >
      {/* ── Story ────────────────────────────────────────────── */}
      <div className="max-w-6xl mx-auto px-8 md:px-16 pt-28 md:pt-36 pb-20 md:pb-28 grid grid-cols-1 md:grid-cols-[5fr_4fr] gap-16 md:gap-20 items-end">
        {/* Photo collage — left column */}
        <div
          className="reveal order-2 md:order-1"
          style={{ transitionDelay: '0.08s' }}
        >
          <div className="relative flex flex-col gap-4">
            {/* Primary — interior, full width */}
            <div className="group relative w-full aspect-[4/3] overflow-hidden rounded-sm">
              <Image
                src="/about.png"
                alt="Interior Suge Coffee & Eatery yang tenang dan hangat"
                fill
                sizes="(max-width: 768px) 100vw, 55vw"
                className="object-cover transition-all duration-[600ms] ease-out group-hover:scale-[1.02]"
                priority
              />
            </div>

            {/*             {/* Secondary row — three detail shots */}
            <div className="grid grid-cols-3 gap-4">
              <div className="group relative aspect-square overflow-hidden rounded-sm">
                <Image
                  src="https://images.unsplash.com/photo-1541167760496-1628856ab772?w=600&q=80"
                  alt="Sajian kopi Suge yang dikerjakan dengan teliti"
                  fill
                  sizes="(max-width: 768px) 33vw, 18vw"
                  className="object-cover transition-all duration-[600ms] ease-out group-hover:scale-[1.02]"
                />
              </div>

              <div className="group relative aspect-square overflow-hidden rounded-sm">
                <Image
                  src="https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=600&q=80"
                  alt="Pilihan makanan Suge Coffee & Eatery"
                  fill
                  sizes="(max-width: 768px) 33vw, 18vw"
                  className="object-cover object-center transition-all duration-[600ms] ease-out group-hover:scale-[1.02]"
                />
              </div>

              <div className="group relative aspect-square overflow-hidden rounded-sm">
                <Image
                  src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=80"
                  alt="Suasana Suge Coffee & Eatery"
                  fill
                  sizes="(max-width: 768px) 33vw, 18vw"
                  className="object-cover transition-all duration-[600ms] ease-out group-hover:scale-[1.02]"
                />
              </div>
            </div>
          </div>
          <p className="mt-3 font-sans text-[0.6rem] tracking-[0.16em] uppercase text-[oklch(50%_0.018_60/0.55)]">
            LOC: BINTARO, JKT&nbsp;&nbsp;//&nbsp;&nbsp;EST. 2022
          </p>
        </div>

        {/* Text column — right */}
        <div
          className="reveal order-1 md:order-2 flex flex-col justify-end"
          style={{ transitionDelay: '0s' }}
        >
          <span
            className="block leading-none font-jp text-[5.5rem] md:text-[7rem] text-[oklch(43%_0.09_162/0.12)] select-none mb-2"
            aria-hidden="true"
          >
            すごい
          </span>

          <h2 className="font-serif font-light leading-[1.15] text-[clamp(2.2rem,4vw,3.6rem)] text-[oklch(20%_0.007_162)]">
            Dari <em className="italic text-[oklch(43%_0.09_162)]">Sugoi</em>
            <br />
            lahir{' '}
            <span className="relative inline-block">
              Suge
              <span className="absolute -bottom-1 left-0 w-full h-px bg-[oklch(43%_0.09_162/0.3)]" />
            </span>
          </h2>

          <div className="mt-8 space-y-5 text-[0.92rem] leading-[1.9] text-[oklch(50%_0.018_60)] max-w-sm">
            <p>
              Berawal dari kata Jepang{' '}
              <strong className="font-[500] text-[oklch(20%_0.007_162)]">
                &ldquo;Sugoi&rdquo; (すごい)
              </strong>{' '}
              yang berarti luar biasa atau mengagumkan. Suge hadir dengan semangat untuk memberikan
              pengalaman luar biasa di setiap cangkirnya.
            </p>
            <p>
              Kami percaya bahwa kedai kopi bukan sekadar tempat singgah, melainkan ruang dimana ide
              bertemu, inspirasi lahir, dan penat lebur. Dengan sentuhan estetika zen Jepang yang
              menenangkan, kami meracik setiap menu dengan penuh kehati-hatian.
            </p>
          </div>

          <a
            href="#menu"
            className="mt-10 inline-flex items-center gap-3 font-sans text-[0.68rem] tracking-[0.18em] uppercase text-[oklch(43%_0.09_162)] hover:gap-5 transition-all duration-300"
          >
            Lihat Menu
            <span
              className="block w-8 h-px bg-[oklch(43%_0.09_162)] transition-all duration-300"
              aria-hidden="true"
            />
          </a>
        </div>
      </div>

      {/* ── Numbers ───────────────────────────────────────────── */}
      <div className="border-t border-[oklch(43%_0.09_162/0.1)]">
        <div className="max-w-6xl mx-auto px-8 md:px-16 py-14 md:py-18 grid grid-cols-2 md:grid-cols-4 gap-10">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="reveal"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div className="font-serif font-light leading-none text-[2.6rem] md:text-[3.2rem] text-[oklch(43%_0.09_162)]">
                {s.value}
              </div>
              <div className="mt-2 font-sans text-[0.65rem] tracking-[0.14em] uppercase text-[oklch(50%_0.018_60)]">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
