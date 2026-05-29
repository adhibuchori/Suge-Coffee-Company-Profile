import Image from 'next/image';

export function Gallery() {
  const images = [
    {
      text: 'Interior · Lantai 1',
      gridClass: 'col-span-12 sm:col-span-5 row-span-2',
      src: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80',
    },
    {
      text: 'Rising Sun',
      gridClass: 'col-span-6 sm:col-span-4 row-span-1',
      src: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=600&q=80',
    },
    {
      text: 'Katsu Sando',
      gridClass: 'col-span-6 sm:col-span-3 row-span-1',
      src: 'https://images.unsplash.com/photo-1617093727343-374698b1b08d?auto=format&fit=crop&w=600&q=80',
    },
    {
      text: 'Detail Ruang',
      gridClass: 'col-span-6 sm:col-span-4 row-span-1 sm:row-span-2',
      src: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80',
    },
    {
      text: 'Suge Latte',
      gridClass: 'col-span-6 sm:col-span-3 row-span-1',
      src: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=600&q=80',
    },
    {
      text: 'Lantai 2',
      gridClass: 'col-span-12 sm:col-span-5 row-span-1',
      src: 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=800&q=80',
    },
    {
      text: 'Ambience',
      gridClass: 'col-span-6 sm:col-span-3 row-span-1',
      src: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=600&q=80',
    },
    {
      text: 'Gyoza',
      gridClass: 'col-span-6 sm:col-span-4 row-span-1',
      src: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=600&q=80',
    },
    {
      text: 'Sofa Area',
      gridClass: 'col-span-6 sm:col-span-4 row-span-1',
      src: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=600&q=80',
    },
    {
      text: 'Warm Corner',
      gridClass: 'col-span-6 sm:col-span-4 row-span-1',
      src: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=600&q=80',
    },
  ];

  return (
    <section
      id="gallery"
      className="py-28 px-8 md:px-16 bg-[var(--emerald-dark)] text-white"
    >
      <div className="reveal flex items-end justify-between gap-6 mb-12">
        <h2
          className="font-light leading-[1.15]"
          style={{
            fontFamily: 'var(--serif)',
            fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)',
            color: 'var(--white)',
          }}
        >
          Ruang yang <em style={{ fontStyle: 'italic', color: 'var(--stone)' }}>Bercerita</em>
        </h2>
        <span
          className="hidden md:block font-jp text-[5rem] leading-none text-white/10 select-none"
          aria-hidden="true"
          style={{ letterSpacing: '0.1em' }}
        >
          空間
        </span>
      </div>

      <div
        className="reveal grid grid-cols-12 auto-rows-[180px] gap-3 md:gap-4"
        style={{ transitionDelay: '0.2s' }}
      >
        {images.map((img) => (
          <div
            key={img.text}
            className={`relative overflow-hidden cursor-pointer group rounded-sm ${img.gridClass}`}
          >
            <div className="absolute inset-0 bg-transparent transition-colors duration-300 group-hover:bg-[rgba(0,0,0,0.2)] z-10 pointer-events-none rounded-sm" />

            <div className="w-full h-full relative">
              <Image
                src={img.src}
                alt={img.text}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-80" />
            </div>

            <span className="absolute bottom-4 left-4 z-20 uppercase font-sans text-[0.65rem] tracking-[0.25em] text-white/70 group-hover:text-white transition-colors duration-300">
              {img.text}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
