'use client';

import { drinksPanels } from '@/lib/constants/menu-drinks';
import { MenuBranding } from '@/components/ui/MenuBranding';
import { CategoryBlock } from '@/components/sections/CategoryBlock';

export function MenuGridDrinks() {
  return (
    <div
      key="drinks"
      className="animate-fade-slide grid grid-cols-1 md:grid-cols-3 border border-charcoal/15 overflow-hidden bg-charcoal shadow-2xl rounded-sm mx-2 md:mx-0"
    >
      {/* Column 1: Charcoal (Dark) */}
      <div className="flex flex-col py-8 border-b md:border-b-0 md:border-r border-cream/10 bg-charcoal rounded-t-sm md:rounded-t-none md:rounded-tl-sm md:rounded-bl-sm">
        <CategoryBlock
          cat={drinksPanels.panel1[0]}
          isDark
        />
        <div className="bg-cream mx-6 my-4 border border-charcoal/10 shadow-sm rounded-sm">
          <CategoryBlock cat={drinksPanels.panel1[1]} />
        </div>
      </div>

      {/* Column 2: Warm Cream */}
      <div className="flex flex-col py-8 border-b md:border-b-0 md:border-r border-charcoal/10 bg-warm">
        <MenuBranding />
        <CategoryBlock cat={drinksPanels.panel2[0]} />
      </div>

      {/* Column 3: Light Cream */}
      <div className="flex flex-col py-8 bg-cream rounded-b-sm md:rounded-b-none md:rounded-tr-sm md:rounded-br-sm">
        <div className="flex-1">
          <CategoryBlock cat={drinksPanels.panel3[0]} />
          <CategoryBlock cat={drinksPanels.panel3[1]} />
        </div>
        <div className="bg-charcoal mx-6 my-4 border border-cream/10 shadow-sm rounded-sm mt-auto">
          <CategoryBlock
            cat={drinksPanels.panel3[2]}
            isDark
          />
        </div>
      </div>
    </div>
  );
}
