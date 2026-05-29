'use client';

import type { useDatePicker } from '@/hooks/useDatePicker';

type UseDatePickerReturn = ReturnType<typeof useDatePicker>;

const DAYS_ID = ['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'] as const;

function NavBtn({
  onClick,
  points,
  label,
  tc,
}: {
  onClick: () => void;
  points: string;
  label: string;
  tc: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="w-7 h-7 flex items-center justify-center transition-colors duration-150 hover:text-(--emerald)"
      style={{ color: tc }}
      aria-label={label}
    >
      <svg
        width={14}
        height={14}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points={points} />
      </svg>
    </button>
  );
}

export function CalendarPopover({
  picker,
  bc,
  tc,
  pc,
  bg,
}: {
  picker: UseDatePickerReturn;
  bc: string;
  tc: string;
  pc: string;
  bg: string;
}) {
  return (
    <div
      className="absolute left-0 right-0 top-full z-50 mt-1 border p-4 shadow-xl"
      style={{ background: bg, borderColor: bc }}
    >
      <div className="flex items-center justify-between mb-4">
        <NavBtn
          onClick={picker.prevMonth}
          points="15 18 9 12 15 6"
          label="Bulan sebelumnya"
          tc={tc}
        />
        <span
          className="font-sans text-[0.75rem] tracking-[0.12em] uppercase font-medium"
          style={{ color: tc }}
        >
          {picker.MONTHS_ID[picker.viewMonth]} {picker.viewYear}
        </span>
        <NavBtn
          onClick={picker.nextMonth}
          points="9 18 15 12 9 6"
          label="Bulan berikutnya"
          tc={tc}
        />
      </div>

      <div className="grid grid-cols-7 mb-1">
        {DAYS_ID.map((d) => (
          <span
            key={d}
            className="text-center font-sans text-[0.6rem] tracking-[0.08em] uppercase py-1"
            style={{ color: pc }}
          >
            {d}
          </span>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-y-0.5">
        {picker.cells.map((day, cellPos) => {
          if (!day)
            return (
              <span
                key={`pad-${picker.viewYear}-${picker.viewMonth}-col${cellPos % 7}-row${Math.floor(cellPos / 7)}`}
              />
            );
          const thisDate = new Date(picker.viewYear, picker.viewMonth, day);
          const isPast = thisDate < picker.today;
          const isToday = thisDate.getTime() === picker.today.getTime();
          const isSel = picker.selected && thisDate.getTime() === picker.selected.getTime();
          return (
            <button
              key={`${picker.viewYear}-${picker.viewMonth}-${day}`}
              type="button"
              disabled={isPast}
              onClick={() => picker.selectDay(day)}
              className="aspect-square flex items-center justify-center font-sans text-[0.78rem] transition-colors duration-150 rounded-sm"
              style={{
                color: isPast
                  ? `${tc}33`
                  : isSel
                    ? 'oklch(98% 0.006 90)'
                    : isToday
                      ? 'var(--emerald)'
                      : tc,
                background: isSel ? 'var(--emerald)' : 'transparent',
                cursor: isPast ? 'not-allowed' : 'pointer',
                fontWeight: isToday || isSel ? 600 : 400,
              }}
            >
              {day}
            </button>
          );
        })}
      </div>
    </div>
  );
}
