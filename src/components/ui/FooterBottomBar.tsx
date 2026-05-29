import Image from 'next/image';

export function FooterBottomBar() {
  return (
    <div className="mt-16 pt-6 border-t border-[oklch(98%_0.006_90/0.05)] flex flex-col md:flex-row justify-between items-center gap-4">
      <span className="font-sans text-[0.62rem] tracking-[0.14em] uppercase text-[oklch(50%_0.018_60/0.6)]">
        &copy; 2026 Suge Coffee &amp; Eatery
      </span>
      <span className="font-sans text-[0.62rem] tracking-[0.14em] uppercase text-[oklch(50%_0.018_60/0.6)]">
        Bintaro, Jakarta Selatan
      </span>
      <a
        href="https://codesheesh.com"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-4 px-5 py-2.5 bg-white/3 border border-white/5 rounded-full hover:border-[oklch(43%_0.09_162/0.4)] hover:bg-white/5 transition-all"
      >
        <span className="text-[9px] font-sans font-semibold text-white/30 uppercase tracking-[0.28em]">
          Developed by
        </span>
        <div className="w-px h-3 bg-white/10" />
        <div className="flex items-center gap-2.5">
          <Image
            src="/code-sheesh-logo-white.svg"
            alt="Code Sheesh Logo"
            width={20}
            height={20}
            className="opacity-80 group-hover:opacity-100 transition-opacity"
          />
          <span className="text-[13px] font-serif italic font-bold text-white tracking-wide">
            Code Sheesh
          </span>
        </div>
      </a>
    </div>
  );
}
