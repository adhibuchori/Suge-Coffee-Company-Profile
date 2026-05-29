'use client';

import { useState } from 'react';

/**
 * Manages hampers order form state and WhatsApp submission.
 * Builds a pre-filled WhatsApp message and opens it in a new tab on submit.
 *
 * @returns Form field state, change handler, and submit handler.
 *
 * @example
 * const form = useHampersForm();
 * <form onSubmit={form.handleSubmit}>
 *   <DatePickerInput value={form.tanggalValue} onChange={form.setTanggalValue} ... />
 * </form>
 */
export function useHampersForm() {
  const [tanggalValue, setTanggalValue] = useState('');

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!tanggalValue) return;
    const form = e.target as HTMLFormElement;
    const nama = (form.elements.namedItem('nama') as HTMLInputElement)?.value ?? '';
    const jumlah = (form.elements.namedItem('jumlah') as HTMLInputElement)?.value ?? '';
    const catatan = (form.elements.namedItem('catatan') as HTMLTextAreaElement)?.value ?? '';
    const msg = [
      'Halo Suge Coffee & Eatery!',
      '',
      `Aku ${nama} tertarik untuk memesan Hampers Ramadhan dari Suge. Ini detail pesanan saya:`,
      '',
      `Jumlah              : ${jumlah}`,
      `Tanggal Pengambilan : ${tanggalValue}`,
      catatan ? `Catatan             : ${catatan}` : '',
      '',
      'Ditunggu konfirmasinya ya, semoga bisa segera diproses. Terima kasih banyak!',
    ]
      .filter((l) => l !== undefined)
      .join('\n');
    window.open(`https://wa.me/6281319436485?text=${encodeURIComponent(msg)}`, '_blank');
    setTanggalValue('');
    form.reset();
  }

  return { tanggalValue, setTanggalValue, handleSubmit };
}
