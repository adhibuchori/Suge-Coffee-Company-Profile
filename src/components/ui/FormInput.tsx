interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export function FormInput({ label, id, ...props }: FormInputProps) {
  return (
    <label
      htmlFor={id}
      className="flex flex-col text-[0.7rem] tracking-[0.18em] uppercase"
      style={{ color: 'rgba(255,255,255,0.4)', fontFamily: 'var(--sans)' }}
    >
      {label}
      <input
        id={id}
        {...props}
        className={`w-full py-[0.85rem] px-4 text-[0.9rem] outline-none transition-all duration-250 mt-2 ${props.className || ''}`}
        style={{
          background: 'rgba(255,255,255,0.05)',
          border: '1px solid rgba(255,255,255,0.12)',
          color: 'var(--white)',
          fontFamily: 'var(--sans)',
          ...props.style,
        }}
      />
    </label>
  );
}
