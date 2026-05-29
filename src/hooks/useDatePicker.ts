'use client';

import { useState, useRef, useEffect } from 'react';

const MONTHS_ID = [
  'Januari',
  'Februari',
  'Maret',
  'April',
  'Mei',
  'Juni',
  'Juli',
  'Agustus',
  'September',
  'Oktober',
  'November',
  'Desember',
];

/**
 * Manages calendar picker state: open/close, month navigation, and day selection.
 * Dismisses the picker when a click occurs outside the container ref.
 *
 * @param value - Currently selected date string formatted as "D MMM YYYY" in id-ID locale.
 * @param onChange - Callback invoked with the newly selected date string.
 * @returns Ref for the container, open state, calendar navigation helpers, and computed calendar data.
 *
 * @example
 * const picker = useDatePicker(value, onChange);
 * <div ref={picker.ref}>...</div>
 */
export function useDatePicker(value: string, onChange: (v: string) => void) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const [viewYear, setViewYear] = useState(today.getFullYear());
  const [viewMonth, setViewMonth] = useState(today.getMonth());

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  function parseSelected(): Date | null {
    if (!value) return null;
    const parts = value.split(' ');
    if (parts.length !== 3) return null;
    const day = parseInt(parts[0], 10);
    const monthIdx = MONTHS_ID.findIndex((m) =>
      m.toLowerCase().startsWith(parts[1].toLowerCase().replace('.', '')),
    );
    const year = parseInt(parts[2], 10);
    if (monthIdx === -1 || isNaN(day) || isNaN(year)) return null;
    return new Date(year, monthIdx, day);
  }

  function prevMonth() {
    if (viewMonth === 0) {
      setViewMonth(11);
      setViewYear((y) => y - 1);
    } else {
      setViewMonth((m) => m - 1);
    }
  }

  function nextMonth() {
    if (viewMonth === 11) {
      setViewMonth(0);
      setViewYear((y) => y + 1);
    } else {
      setViewMonth((m) => m + 1);
    }
  }

  function selectDay(day: number) {
    const d = new Date(viewYear, viewMonth, day);
    if (d < today) return;
    const formatted = d.toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
    onChange(formatted);
    setOpen(false);
  }

  const firstDay = new Date(viewYear, viewMonth, 1).getDay();
  const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();
  const cells: (number | null)[] = [
    ...Array(firstDay).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ];
  const selected = parseSelected();

  return {
    ref,
    open,
    setOpen,
    today,
    viewYear,
    viewMonth,
    selected,
    cells,
    prevMonth,
    nextMonth,
    selectDay,
    MONTHS_ID,
  };
}
