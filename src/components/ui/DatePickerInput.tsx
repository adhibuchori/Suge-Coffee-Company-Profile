'use client';

import { useDatePicker } from '@/hooks/useDatePicker';
import { CalendarPopover } from '@/components/ui/CalendarPopover';

export function DatePickerInput({
  value,
  onChange,
  placeholder,
  inputCls,
  bc,
  tc,
  pc,
  bg,
  required,
  ariaLabel,
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
  inputCls: string;
  bc: string;
  tc: string;
  pc: string;
  bg: string;
  required?: boolean;
  ariaLabel: string;
}) {
  const picker = useDatePicker(value, onChange);

  return (
    <div
      ref={picker.ref}
      className="relative"
    >
      <input
        readOnly
        required={required}
        aria-label={ariaLabel}
        placeholder={placeholder}
        value={value}
        onClick={() => picker.setOpen((o) => !o)}
        className={`${inputCls} cursor-pointer`}
        style={{ borderColor: picker.open ? 'var(--emerald)' : bc, color: value ? tc : pc }}
      />
      {picker.open && (
        <CalendarPopover
          picker={picker}
          bc={bc}
          tc={tc}
          pc={pc}
          bg={bg}
        />
      )}
    </div>
  );
}
