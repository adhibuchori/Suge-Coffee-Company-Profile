'use client';

import { DropdownInput } from '@/components/ui/DropdownInput';
import { DatePickerInput } from '@/components/ui/DatePickerInput';
import { useReservasiForm } from '@/hooks/useReservasiForm';
import { formTokens } from '@/lib/form-tokens';
import { JAM_OPTIONS, TAMU_OPTIONS, LABEL_CLS } from '@/lib/constants/rsvp-options';

export { HampersForm } from './HampersForm';

export function RsvpForm({ dark = false }: { dark?: boolean }) {
  const form = useReservasiForm();
  const { bc, tc, lc, bg, pc, placeholderCls } = formTokens(dark);

  const inputCls = `w-full py-3 px-0 text-[0.88rem] leading-none outline-none transition-colors duration-200 mt-2 bg-transparent border-0 border-b rounded-none resize-none ${placeholderCls}`;
  return (
    <form
      onSubmit={form.handleSubmit}
      className="flex flex-col w-full"
    >
      {/* Row 1 — Nama + WhatsApp */}
      <div className="flex flex-col sm:flex-row gap-0 sm:gap-6">
        <label
          className={`${LABEL_CLS} flex-1`}
          style={{ color: lc }}
        >
          Nama Lengkap
          <input
            type="text"
            required
            aria-label="Nama Lengkap"
            name="nama"
            placeholder="Masukan nama kamu"
            className={inputCls}
            style={{ borderColor: bc, color: tc }}
            onFocus={(e) => (e.target.style.borderColor = 'var(--emerald)')}
            onBlur={(e) => (e.target.style.borderColor = bc)}
          />
        </label>
        <label
          className={`${LABEL_CLS} flex-1`}
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

      {/* Row 2 — Tanggal + Jam */}
      <div className="flex flex-col sm:flex-row gap-0 sm:gap-6">
        <div
          className={`${LABEL_CLS} flex-1`}
          style={{ color: lc }}
        >
          Tanggal
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
            ariaLabel="Tanggal Reservasi"
          />
        </div>
        <div
          className={`${LABEL_CLS} flex-1`}
          style={{ color: lc }}
        >
          Jam Kedatangan
          <DropdownInput
            options={JAM_OPTIONS}
            value={form.jamValue}
            onChange={form.setJamValue}
            placeholder="Pilih jam"
            inputCls={inputCls}
            bc={bc}
            tc={tc}
            pc={pc}
            bg={bg}
            required
            ariaLabel="Jam Kedatangan"
          />
        </div>
      </div>

      <div
        className={LABEL_CLS}
        style={{ color: lc }}
      >
        Jumlah Tamu
        <DropdownInput
          options={TAMU_OPTIONS}
          value={form.tamuValue}
          onChange={form.setTamuValue}
          placeholder="Pilih jumlah tamu"
          inputCls={inputCls}
          bc={bc}
          tc={tc}
          pc={pc}
          bg={bg}
          required
          ariaLabel="Jumlah Tamu"
        />
      </div>

      <label
        className={LABEL_CLS}
        style={{ color: lc }}
      >
        Catatan (opsional)
        <textarea
          rows={3}
          name="catatan"
          aria-label="Catatan Opsional"
          placeholder="Ada permintaan khusus?"
          className={`${inputCls} resize-none`}
          style={{ borderColor: bc, color: tc }}
          onFocus={(e) => (e.target.style.borderColor = 'var(--emerald)')}
          onBlur={(e) => (e.target.style.borderColor = bc)}
        />
      </label>

      <button
        type="submit"
        className="mt-10 py-[0.85rem] px-8 text-[0.72rem] tracking-[0.18em] uppercase font-sans border cursor-pointer transition-all duration-300 w-max hover:bg-emerald hover:border-emerald hover:text-cream"
        style={{
          background: 'transparent',
          color: dark ? 'oklch(98% 0.006 90)' : 'var(--ink)',
          borderColor: dark ? 'oklch(98% 0.006 90 / 0.3)' : 'var(--ink)',
        }}
      >
        Kirim Reservasi
      </button>
    </form>
  );
}
