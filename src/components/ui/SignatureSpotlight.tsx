import Image from 'next/image';
import type { MenuItem } from '@/types';

interface SignatureSpotlightProps {
  items: MenuItem[];
}

export function SignatureSpotlight({ items }: SignatureSpotlightProps) {
  const featured = items.filter((i) => i.isFeatured).slice(0, 3);
  if (featured.length === 0) return null;

  const [hero, ...rest] = featured;

  return (
    <div className="bg-[oklch(14%_0.007_162)] text-[oklch(98%_0.006_90)]">
      <div className="max-w-5xl mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-start">
          {/* Hero item — left */}
          <div className="flex-1 min-w-0">
            {hero.photo && (
              <div className="w-full aspect-[4/3] overflow-hidden mb-8">
                <Image
                  src={hero.photo}
                  alt={hero.name}
                  width={640}
                  height={480}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            )}
            <p className="font-sans text-[0.6rem] tracking-[0.22em] uppercase text-[oklch(43%_0.09_162)] mb-3">
              House Signature
            </p>
            <h3 className="font-serif text-2xl md:text-3xl font-[400] tracking-wide leading-tight mb-3">
              {hero.name}
            </h3>
            {hero.description && (
              <p className="font-sans text-[0.82rem] font-[300] leading-relaxed text-[oklch(77%_0.04_80/0.7)] max-w-xs">
                {hero.description}
              </p>
            )}
            {(hero.price || hero.priceHot) && (
              <p className="font-sans text-sm tabular-nums text-[oklch(77%_0.04_80/0.5)] mt-4">
                {hero.price ? `${hero.price}K` : `${hero.priceHot}K`}
              </p>
            )}
          </div>

          {/* Secondary items — right column */}
          {rest.length > 0 && (
            <div className="flex flex-col gap-8 md:w-56 shrink-0">
              {rest.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 items-start"
                >
                  {item.photo && (
                    <div className="w-16 h-16 shrink-0 overflow-hidden">
                      <Image
                        src={item.photo}
                        alt={item.name}
                        width={64}
                        height={64}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <div className="min-w-0">
                    <p className="font-serif text-base font-[400] tracking-wide leading-snug mb-1">
                      {item.name}
                    </p>
                    {item.description && (
                      <p className="font-sans text-[0.75rem] font-[300] leading-relaxed text-[oklch(77%_0.04_80/0.55)] line-clamp-2">
                        {item.description}
                      </p>
                    )}
                    {(item.price || item.priceHot) && (
                      <p className="font-sans text-xs tabular-nums text-[oklch(77%_0.04_80/0.4)] mt-1">
                        {item.price ? `${item.price}K` : `${item.priceHot}K`}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
