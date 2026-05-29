'use client';

import Image from 'next/image';
import type { MenuItem } from '@/types';

interface MenuItemRowProps {
  item: MenuItem;
  isExpanded: boolean;
  onToggle: (id: string) => void;
}

function formatPrice(item: MenuItem): string {
  if (item.price !== undefined && item.price !== '-') return `${item.price}K`;
  if (item.priceHot !== undefined && item.priceHot !== '-') {
    if (item.priceIce !== undefined && item.priceIce !== '-')
      return `${item.priceHot}K / ${item.priceIce}K`;
    return `${item.priceHot}K`;
  }
  if (item.priceIce !== undefined && item.priceIce !== '-') return `${item.priceIce}K`;
  return '';
}

export function MenuItemRow({ item, isExpanded, onToggle }: MenuItemRowProps) {
  const price = formatPrice(item);
  const hasDetail = !!(item.description || item.photo || item.isSignature);

  return (
    <div className="border-b border-[oklch(14%_0.007_162/0.08)]">
      <button
        type="button"
        onClick={() => hasDetail && onToggle(item.id)}
        className={[
          'group w-full flex items-start justify-between gap-4 py-4 text-left',
          hasDetail ? 'cursor-pointer' : 'cursor-default',
        ].join(' ')}
        aria-expanded={hasDetail ? isExpanded : undefined}
      >
        <span className="flex items-center gap-2.5 min-w-0">
          {item.isSignature && (
            <span
              className="shrink-0 w-2.5 h-2.5 rounded-full bg-[oklch(43%_0.09_162)] mt-px"
              aria-label="Signature item"
            />
          )}
          <span className={`flex flex-col min-w-0${item.isSignature ? '' : ' pl-[1.375rem]'}`}>
            <span className="font-sans text-[0.8rem] font-[400] tracking-[0.13em] uppercase text-[oklch(20%_0.007_162)] group-hover:text-[oklch(43%_0.09_162)] transition-colors duration-200 truncate">
              {item.name.split(/\n|\\n/)[0]}
            </span>
            {item.name.split(/\n|\\n/).length > 1 && (
              <span className="font-sans text-[0.7rem] font-[300] tracking-[0.1em] text-[oklch(50%_0.018_60)] mt-0.5">
                {item.name
                  .split(/\n|\\n/)[1]
                  .replace(/•/g, '')
                  .trim()}
              </span>
            )}
          </span>
        </span>
        <span className="shrink-0 font-sans text-[0.75rem] tabular-nums text-[oklch(50%_0.018_60)] tracking-wide">
          {price}
        </span>
      </button>

      {hasDetail && isExpanded && (
        <div className="pb-6 flex gap-5 items-start animate-fade-slide">
          {item.photo && (
            <div className="shrink-0 w-24 h-24 rounded-sm overflow-hidden">
              <Image
                src={item.photo}
                alt={item.name}
                width={96}
                height={96}
                className="w-full h-full object-cover"
              />
            </div>
          )}
          <div className="flex flex-col gap-2 min-w-0">
            {item.isSignature && (
              <span className="inline-flex items-center gap-1.5 font-sans text-[0.6rem] tracking-[0.18em] uppercase text-[oklch(43%_0.09_162)]">
                <span className="w-1 h-1 rounded-full bg-[oklch(43%_0.09_162)]" />
                House Signature
              </span>
            )}
            {item.description && (
              <p className="font-sans text-[0.82rem] font-[300] leading-relaxed text-[oklch(50%_0.018_60)]">
                {item.description}
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
