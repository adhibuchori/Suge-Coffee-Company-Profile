'use client';

import { DatePickerInput } from '@/components/ui/DatePickerInput';
import { useHampersForm } from '@/hooks/useHampersForm';
import { formTokens } from '@/lib/form-tokens';

/**
 * Hampers Ramadhan order form — minimalist lines style.
 *
 * @param dark - When true renders with the dark-background colour scheme.
 */
export function HampersForm({ dark = false }: { dark?: boolean }) {
  const form = useHampersForm();
  const { bc, tc, lc, bg, pc, placeholderCls } = formTokens(dark);

  const inputCls = `w-full py-3 px-0 text-[0.88rem] leading-none outline-none transition-colors duration-200 mt-2 bg-transparent border-0 border-b rounded-none resize-none ${placeholderCls}`;
  const labelCls = 'flex flex-col text-[0.65rem] tracking-[0.2em] uppercase mt-6 font-sans';

  return (
    <form
      onSubmit={form.handleSubmit}
      className="flex flex-col w-full"
    >
      {/* Row 1 — Nama + WhatsApp */}
      <div className="flex flex-col sm:flex-row gap-0 sm:gap-6">
        <label
          className={`${labelCls} flex-1`}
          style={{ color: lc }}
        >
          Nama Lengkap
          <input
            type="text"
            required
            name="nama"
            aria-label="Nama Lengkap"
            placeholder="Masukan nama kamu"
            className={inputCls}
            style={{ borderColor: bc, color: tc }}
            onFocus={(e) => (e.target.style.borderColor = 'var(--emerald)')}
            onBlur={(e) => (e.target.style.borderColor = bc)}
          />
        </label>
        <label
          className={`${labelCls} flex-1`}
          style={{ color: lc }}
        >
          No. WhatsApp
          <input
            type="tel"
            required
            name="wa"
            aria-label="Nomor WhatsApp"
            placeholder="+62 8xx xxxx xxxx"
            className={inputCls}
            style={{ borderColor: bc, color: tc }}
            onFocus={(e) => (e.target.style.borderColor = 'var(--emerald)')}
            onBlur={(e) => (e.target.style.borderColor = bc)}
          />
        </label>
      </div>

      {/* Jumlah */}
      <label
        className={labelCls}
        style={{ color: lc }}
      >
        Jumlah
        <input
          type="text"
          required
          aria-label="Jumlah Hampers"
          name="jumlah"
          placeholder="Masukan jumlah hampers"
          className={inputCls}
          style={{ borderColor: bc, color: tc }}
          onFocus={(e) => (e.target.style.borderColor = 'var(--emerald)')}
          onBlur={(e) => (e.target.style.borderColor = bc)}
        />
      </label>

      {/* Tanggal Pengambilan */}
      <div
        className={labelCls}
        style={{ color: lc }}
      >
        Tanggal Pengambilan
        <DatePickerInput
          value={form.tanggalValue}
          onChange={form.setTanggalValue}
          placeholder="Pilih tanggal"
          inputCls={inputCls}
          bc={bc}
          tc={tc}
          pc={pc}
          bg={bg}
          required
          ariaLabel="Tanggal Pengambilan"
        />
      </div>

      {/* Catatan */}
      <label
        className={labelCls}
        style={{ color: lc }}
      >
        Catatan (opsional)
        <textarea
          rows={3}
          aria-label="Catatan Opsional"
          name="catatan"
          placeholder="Preferensi isi, kemasan khusus, dll."
          className={`${inputCls} resize-none`}
          style={{ borderColor: bc, color: tc }}
          onFocus={(e) => (e.target.style.borderColor = 'var(--emerald)')}
          onBlur={(e) => (e.target.style.borderColor = bc)}
        />
      </label>

      <button
        type="submit"
        className="mt-10 py-[0.85rem] px-8 text-[0.72rem] tracking-[0.18em] uppercase font-sans border cursor-pointer transition-all duration-300 w-max hover:bg-[oklch(43%_0.09_162)] hover:border-[oklch(43%_0.09_162)] hover:text-[oklch(98%_0.006_90)]"
        style={{
          background: 'transparent',
          color: dark ? 'oklch(98% 0.006 90)' : 'var(--ink)',
          borderColor: dark ? 'oklch(98% 0.006 90 / 0.3)' : 'var(--ink)',
        }}
      >
        Pesan Hampers Ramadhan
      </button>
    </form>
  );
}
