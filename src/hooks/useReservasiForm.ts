'use client';

import { useState } from 'react';

/**
 * Manages reservasi (table reservation) form state and WhatsApp submission.
 * Builds a pre-filled WhatsApp message and opens it in a new tab on submit.
 *
 * @returns Form field state, change handlers, and submit handler.
 *
 * @example
 * const form = useReservasiForm();
 * <form onSubmit={form.handleSubmit}>
 *   <DropdownInput value={form.jamValue} onChange={form.setJamValue} ... />
 * </form>
 */
export function useReservasiForm() {
  const [jamValue, setJamValue] = useState('');
  const [tamuValue, setTamuValue] = useState('');
  const [tanggalValue, setTanggalValue] = useState('');

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!jamValue || !tamuValue || !tanggalValue) return;
    const form = e.target as HTMLFormElement;
    const nama = (form.elements.namedItem('nama') as HTMLInputElement)?.value ?? '';
    const catatan = (form.elements.namedItem('catatan') as HTMLTextAreaElement)?.value ?? '';
    const msg = [
      'Halo Suge Coffee & Eatery!',
      '',
      `Aku ${nama} ingin reservasi meja dan memastikan tempat duduk yang nyaman. Ini detail kunjungan aku:`,
      '',
      `Tanggal    : ${tanggalValue}`,
      `Jam        : ${jamValue}`,
      `Jumlah Tamu: ${tamuValue}`,
      catatan ? `Catatan    : ${catatan}` : '',
      '',
      'Kalau ada yang perlu dikonfirmasi atau dipersiapkan, jangan ragu untuk hubungi aku ya. Sampai jumpa di Suge!',
    ]
      .filter((l) => l !== undefined)
      .join('\n');
    window.open(`https://wa.me/6281319436485?text=${encodeURIComponent(msg)}`, '_blank');
    setJamValue('');
    setTamuValue('');
    setTanggalValue('');
    form.reset();
  }

  return {
    jamValue,
    setJamValue,
    tamuValue,
    setTamuValue,
    tanggalValue,
    setTanggalValue,
    handleSubmit,
  };
}
