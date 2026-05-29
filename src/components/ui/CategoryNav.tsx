'use client';

interface CategoryNavProps {
  categories: { key: string; label: string }[];
  active: string;
  onSelect: (key: string) => void;
}

export function CategoryNav({ categories, active, onSelect }: CategoryNavProps) {
  return (
    <div className="sticky top-0 z-20 bg-[oklch(98%_0.006_90/0.95)] backdrop-blur-sm border-b border-[oklch(14%_0.007_162/0.07)]">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <div className="flex gap-0 overflow-x-auto no-scrollbar">
          {categories.map(({ key, label }) => {
            const isActive = active === key;
            return (
              <button
                key={key}
                type="button"
                onClick={() => onSelect(key)}
                className={[
                  'shrink-0 font-sans text-[0.65rem] tracking-[0.18em] uppercase py-4 px-4 border-b-2 transition-all duration-200',
                  isActive
                    ? 'border-[oklch(43%_0.09_162)] text-[oklch(43%_0.09_162)]'
                    : 'border-transparent text-[oklch(50%_0.018_60)] hover:text-[oklch(20%_0.007_162)]',
                ].join(' ')}
              >
                {label}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
