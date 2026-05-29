import type { MenuCategory } from '@/types';

export function CategoryBlock({ category }: { category: MenuCategory }) {
  return (
    <div className="mb-14">
      <h3
        className="text-[1.25rem] font-medium tracking-[0.15em] mb-1 leading-tight uppercase"
        style={{ fontFamily: 'var(--sans)' }}
      >
        {category.title}
      </h3>
      {category.subtitle && (
        <p className="text-[0.7rem] uppercase tracking-[0.2em] mb-8 opacity-60 font-sans">
          {category.subtitle}
        </p>
      )}
      {!category.subtitle && <div className="h-6" />}

      <div className="flex flex-col gap-5">
        {category.items.map((item) => (
          <div
            key={item.id}
            className="flex flex-col group"
          >
            <div className="flex justify-between items-start gap-4">
              <span className="flex flex-col">
                <span className="text-[0.85rem] font-medium tracking-wider font-sans">
                  {item.name.split(/\n|\\n/)[0]}
                  {item.isSignature && (
                    <span
                      className="text-[1rem] ml-1 opacity-80"
                      title="Signature"
                    >
                      ☁️
                    </span>
                  )}
                </span>
                {item.name.split(/\n|\\n/).length > 1 && (
                  <span className="text-[0.72rem] font-normal tracking-[0.08em] opacity-60 font-sans mt-0.5 pl-2">
                    {item.name
                      .split(/\n|\\n/)[1]
                      .replace(/•/g, '')
                      .trim()}
                  </span>
                )}
              </span>
              <div className="flex gap-4 text-[0.85rem] font-medium font-sans tabular-nums">
                {item.priceHot && <span>{item.priceHot}</span>}
                {item.priceIce && <span>{item.priceIce}</span>}
                {item.price && <span>{item.price}</span>}
              </div>
            </div>
            {item.description && (
              <p className="text-[0.7rem] mt-1 opacity-70 leading-relaxed max-w-[85%] font-sans">
                {item.description}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
