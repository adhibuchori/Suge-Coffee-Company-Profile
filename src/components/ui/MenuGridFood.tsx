'use client';

import { foodPanels } from '@/lib/constants/menu-food';
import { MenuBranding } from '@/components/ui/MenuBranding';
import { CategoryBlock } from '@/components/sections/CategoryBlock';

export function MenuGridFood() {
  return (
    <div
      key="food"
      className="animate-fade-slide grid grid-cols-1 md:grid-cols-3 border-t border-b border-charcoal/15 overflow-hidden bg-cream shadow-2xl"
    >
      {/* Column 1: Light Cream */}
      <div className="flex flex-col py-8 border-b md:border-b-0 md:border-r border-charcoal/10 bg-cream">
        <CategoryBlock cat={foodPanels.panel4[0]} />
        <div className="bg-warm mx-6 my-4 border border-charcoal/10 shadow-sm rounded-sm">
          <CategoryBlock cat={foodPanels.panel4[1]} />
        </div>
      </div>

      {/* Column 2: Warm Cream */}
      <div className="flex flex-col py-8 border-b md:border-b-0 md:border-r border-charcoal/10 bg-warm">
        <MenuBranding />
        <CategoryBlock cat={foodPanels.panel5[0]} />
      </div>

      {/* Column 3: Charcoal (Dark) */}
      <div className="flex flex-col py-8 bg-charcoal">
        <div className="flex-1">
          <CategoryBlock
            cat={foodPanels.panel6[0]}
            isDark
          />
        </div>
        <div className="bg-cream mx-6 my-4 border border-charcoal/10 shadow-sm rounded-sm mt-auto">
          <CategoryBlock cat={foodPanels.panel6[1]} />
        </div>
      </div>
    </div>
  );
}
