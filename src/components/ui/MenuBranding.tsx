import Image from 'next/image';

export function MenuBranding() {
  return (
    <div className="flex flex-col items-center justify-center mb-6 mt-2">
      <div className="relative flex items-center justify-center mb-1 w-[72px] h-[72px]">
        <div
          className="absolute inset-0 rounded-full border animate-enso"
          style={{
            borderColor: 'rgba(45,106,90,0.15)',
            borderWidth: '1px',
          }}
        />
        <div
          className="absolute w-[56px] h-[56px] rounded-full border animate-enso"
          style={{
            borderColor: 'rgba(45,106,90,0.08)',
            borderWidth: '1px',
            animationDirection: 'reverse',
            animationDuration: '45s',
          }}
        />
        <Image
          src="/suge-coffee-logo.png"
          alt="Suge Coffee & Eatery"
          width={32}
          height={38}
          className="object-contain relative z-10"
        />
      </div>
      <div className="text-[2.2rem] font-light text-charcoal tracking-wider font-serif">suge</div>
      <div className="text-[0.55rem] tracking-[0.3em] text-muted mt-1 uppercase font-sans">
        Coffee | Eatery
      </div>
    </div>
  );
}
