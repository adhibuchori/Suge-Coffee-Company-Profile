'use client';

import { useDropdown } from '@/hooks/useDropdown';

export function DropdownInput({
  options,
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
  options: string[];
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
  const { ref, open, setOpen } = useDropdown();

  return (
    <div
      ref={ref}
      className="relative"
    >
      <input
        readOnly
        required={required}
        aria-label={ariaLabel}
        placeholder={placeholder}
        value={value}
        onClick={() => setOpen((o) => !o)}
        className={`${inputCls} cursor-pointer`}
        style={{ borderColor: open ? 'var(--emerald)' : bc, color: value ? tc : pc }}
      />
      {open && (
        <ul
          className="absolute left-0 right-0 top-full z-50 border py-1 mt-0 max-h-48 overflow-y-auto"
          style={{ background: bg, borderColor: bc }}
        >
          {options.map((opt) => (
            <li key={opt}>
              <button
                type="button"
                onClick={() => {
                  onChange(opt);
                  setOpen(false);
                }}
                className="w-full text-left px-4 py-2.5 text-[0.88rem] transition-colors duration-150"
                style={{ color: value === opt ? 'var(--emerald)' : tc, background: 'transparent' }}
              >
                {opt}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
