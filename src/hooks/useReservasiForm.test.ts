import { renderHook, act } from '@testing-library/react';
import { describe, it, expect, vi, afterEach } from 'vitest';
import { useReservasiForm } from './useReservasiForm';

describe('useReservasiForm', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('starts with all field values empty', () => {
    const { result } = renderHook(() => useReservasiForm());
    expect(result.current.jamValue).toBe('');
    expect(result.current.tamuValue).toBe('');
    expect(result.current.tanggalValue).toBe('');
  });

  it('does not open WhatsApp when required fields are missing', () => {
    const openSpy = vi.spyOn(window, 'open').mockImplementation(() => null);
    const { result } = renderHook(() => useReservasiForm());

    const form = document.createElement('form');
    const event = { preventDefault: vi.fn(), target: form } as unknown as React.FormEvent;

    act(() => {
      result.current.handleSubmit(event);
    });

    expect(openSpy).not.toHaveBeenCalled();
  });

  it('opens WhatsApp when all required fields are filled', () => {
    const openSpy = vi.spyOn(window, 'open').mockImplementation(() => null);
    const { result } = renderHook(() => useReservasiForm());

    act(() => {
      result.current.setJamValue('09.00 – 11.00');
      result.current.setTamuValue('2 orang');
      result.current.setTanggalValue('20 Jun 2026');
    });

    const form = document.createElement('form');
    const namaInput = document.createElement('input');
    namaInput.name = 'nama';
    namaInput.value = 'Rina';
    form.appendChild(namaInput);
    form.reset = vi.fn();
    const event = { preventDefault: vi.fn(), target: form } as unknown as React.FormEvent;

    act(() => {
      result.current.handleSubmit(event);
    });

    expect(openSpy).toHaveBeenCalledOnce();
    const url = openSpy.mock.calls[0][0] as string;
    expect(url).toContain('wa.me/6281319436485');
    expect(url).toContain('Rina');
  });

  it('includes catatan in the WhatsApp message when catatan is provided', () => {
    const openSpy = vi.spyOn(window, 'open').mockImplementation(() => null);
    const { result } = renderHook(() => useReservasiForm());

    act(() => {
      result.current.setJamValue('09.00 – 11.00');
      result.current.setTamuValue('2 orang');
      result.current.setTanggalValue('20 Jun 2026');
    });

    const form = document.createElement('form');
    const namaInput = document.createElement('input');
    namaInput.name = 'nama';
    namaInput.value = 'Rina';
    form.appendChild(namaInput);
    const catatanTextarea = document.createElement('textarea');
    catatanTextarea.name = 'catatan';
    catatanTextarea.value = 'Dekat jendela ya';
    form.appendChild(catatanTextarea);
    form.reset = vi.fn();
    const event = { preventDefault: vi.fn(), target: form } as unknown as React.FormEvent;

    act(() => {
      result.current.handleSubmit(event);
    });

    const url = openSpy.mock.calls[0][0] as string;
    expect(url).toContain('Dekat%20jendela%20ya');
  });

  it('resets all field values after a successful submit', () => {
    vi.spyOn(window, 'open').mockImplementation(() => null);
    const { result } = renderHook(() => useReservasiForm());

    act(() => {
      result.current.setJamValue('09.00 – 11.00');
      result.current.setTamuValue('2 orang');
      result.current.setTanggalValue('20 Jun 2026');
    });

    const form = document.createElement('form');
    form.reset = vi.fn();
    const event = { preventDefault: vi.fn(), target: form } as unknown as React.FormEvent;

    act(() => {
      result.current.handleSubmit(event);
    });

    expect(result.current.jamValue).toBe('');
    expect(result.current.tamuValue).toBe('');
    expect(result.current.tanggalValue).toBe('');
  });
});
