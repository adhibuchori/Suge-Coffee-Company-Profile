'use client';

import { cn } from '@/lib/utils';
import type { MenuItem } from '@/types';

/**
 * Renders a single menu item row inside a CategoryBlock, including hover indicator,
 * name, description, and price columns.
 */
export function CategoryItemRow({
  item,
  textColor,
  isDark,
}: {
  item: MenuItem;
  textColor: string;
  isDark?: boolean;
}) {
  return (
    <div
      className={cn(
        'flex justify-between items-start gap-4 px-2 py-2 -mx-2 rounded-sm transition-all duration-200 group/menu-item relative',
        isDark ? 'hover:bg-cream/5' : 'hover:bg-charcoal/[0.03]',
      )}
    >
      {/* Emerald indicator line on hover */}
      <div
        className={cn(
          'absolute left-0 top-1 bottom-1 w-[2px] rounded-full opacity-0 transition-opacity duration-200 group-hover/menu-item:opacity-100',
          isDark ? 'bg-emerald-light' : 'bg-emerald',
        )}
      />
      <div className={cn('flex-1 min-w-0', item.name.startsWith('•') ? 'pl-5' : 'pl-1')}>
        <div className="flex items-center flex-wrap gap-1.5">
          <span className="flex flex-col">
            <span
              className={cn(
                'text-[0.78rem] font-medium tracking-wide leading-snug font-sans transition-colors duration-200',
                textColor,
              )}
            >
              {item.name.replace(/^•/, '').trim()}
            </span>
          </span>
          {item.isSignature && (
            <svg
              width={13}
              height={13}
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-label="Best Seller"
              className={cn(
                'shrink-0 transition-colors duration-200',
                isDark
                  ? 'text-stone/60 group-hover/menu-item:text-emerald-light'
                  : 'text-emerald/70',
              )}
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          )}
        </div>
        {item.description && (
          <p
            className={cn(
              'text-[0.7rem] mt-1 leading-relaxed font-sans',
              isDark ? 'text-cream/60' : 'text-muted',
            )}
          >
            {item.description}
          </p>
        )}
      </div>
      <div
        className={cn(
          'text-[0.82rem] font-semibold tracking-wide whitespace-nowrap flex gap-4 justify-end w-24 font-sans shrink-0 transition-colors duration-200',
          textColor,
        )}
      >
        {item.price !== undefined ? (
          <span>{item.price}</span>
        ) : (
          <>
            <span className={cn('w-10 text-right', item.priceHot === '-' && 'opacity-25')}>
              {item.priceHot}
            </span>
            <span className={cn('w-10 text-right', item.priceIce === '-' && 'opacity-25')}>
              {item.priceIce}
            </span>
          </>
        )}
      </div>
    </div>
  );
}
