/** Returns colour/style tokens for form components based on dark/light mode. */
export function formTokens(dark: boolean) {
  return {
    bc: dark ? 'rgba(250,248,244,0.15)' : 'rgba(0,0,0,0.15)',
    tc: dark ? 'oklch(98% 0.006 90)' : 'var(--ink)',
    lc: dark ? 'oklch(50% 0.018 60)' : 'var(--muted)',
    bg: dark ? 'oklch(14% 0.007 162)' : 'oklch(98% 0.006 90)',
    pc: dark ? 'oklch(42% 0.015 60)' : 'var(--muted)',
    placeholderCls: dark
      ? '[&::placeholder]:text-[oklch(42%_0.015_60)] [&::placeholder]:text-[0.88rem]'
      : '[&::placeholder]:text-[var(--muted)] [&::placeholder]:text-[0.88rem]',
  };
}
