'use client';

import { cn } from '@/lib/utils';
import type { MenuCategory } from '@/types';
import { CategoryItemRow } from '@/components/ui/CategoryItemRow';

export function CategoryBlock({
  cat,
  boxStyle,
  isDark,
}: {
  cat: MenuCategory;
  boxStyle?: string;
  isDark?: boolean;
}) {
  const textColor = isDark ? 'text-cream' : 'text-charcoal';
  const subtitleColor = isDark ? 'text-stone/90' : 'text-muted';

  return (
    <div className={cn('px-6 py-7 transition-all duration-300', boxStyle)}>
      <div
        className={cn(
          'flex justify-between items-end mb-5 pb-3',
          isDark ? 'border-cream/10' : 'border-charcoal/10',
          cat.subtitle ? 'border-b' : '',
        )}
      >
        <div>
          <h3
            className={cn(
              'text-[0.95rem] uppercase tracking-[0.15em] font-bold font-sans flex items-center gap-2',
              textColor,
            )}
          >
            <span
              className={cn(
                'block w-1.5 h-1.5 rounded-full',
                isDark ? 'bg-emerald-light' : 'bg-emerald',
              )}
            />
            {cat.title}
          </h3>
          {cat.subtitle && (
            <p
              className={cn(
                'text-[0.65rem] uppercase tracking-[0.18em] mt-1 font-medium font-sans ml-[0.85rem]',
                subtitleColor,
              )}
            >
              {cat.subtitle}
            </p>
          )}
        </div>
        {cat.items[0]?.priceHot !== undefined && (
          <div
            className={cn(
              'text-[0.6rem] tracking-[0.15em] font-bold uppercase opacity-50 flex gap-4 w-24 justify-end font-sans',
              textColor,
            )}
          >
            <span className="w-10 text-right">HOT</span>
            <span className="w-10 text-right">ICE</span>
          </div>
        )}
      </div>

      <div className="flex flex-col gap-1">
        {cat.items.map((item) =>
          item.isGroupTitle ? (
            <div
              key={item.id}
              className="pt-3 pb-1 px-2"
            >
              <span
                className={cn(
                  'text-[0.7rem] font-semibold tracking-[0.18em] uppercase font-sans',
                  isDark ? 'text-stone/50' : 'text-charcoal/40',
                )}
              >
                {item.name}
              </span>
            </div>
          ) : (
            <CategoryItemRow
              key={item.id}
              item={item}
              textColor={textColor}
              isDark={isDark}
            />
          ),
        )}
      </div>
    </div>
  );
}
