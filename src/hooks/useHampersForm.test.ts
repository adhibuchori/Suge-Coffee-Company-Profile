import { renderHook, act } from '@testing-library/react';
import { describe, it, expect, vi, afterEach } from 'vitest';
import { useHampersForm } from './useHampersForm';

describe('useHampersForm', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('starts with an empty tanggalValue', () => {
    const { result } = renderHook(() => useHampersForm());
    expect(result.current.tanggalValue).toBe('');
  });

  it('updates tanggalValue when setTanggalValue is called', () => {
    const { result } = renderHook(() => useHampersForm());
    act(() => {
      result.current.setTanggalValue('10 Jan 2026');
    });
    expect(result.current.tanggalValue).toBe('10 Jan 2026');
  });

  it('does not open WhatsApp when tanggalValue is empty on submit', () => {
    const openSpy = vi.spyOn(window, 'open').mockImplementation(() => null);
    const { result } = renderHook(() => useHampersForm());

    const form = document.createElement('form');
    const event = { preventDefault: vi.fn(), target: form } as unknown as React.FormEvent;

    act(() => {
      result.current.handleSubmit(event);
    });

    expect(openSpy).not.toHaveBeenCalled();
  });

  it('opens WhatsApp with a pre-filled message when tanggalValue is set', () => {
    const openSpy = vi.spyOn(window, 'open').mockImplementation(() => null);
    const { result } = renderHook(() => useHampersForm());

    act(() => {
      result.current.setTanggalValue('15 Mar 2026');
    });

    const form = document.createElement('form');
    const namaInput = document.createElement('input');
    namaInput.name = 'nama';
    namaInput.value = 'Budi';
    form.appendChild(namaInput);
    const event = { preventDefault: vi.fn(), target: form } as unknown as React.FormEvent;

    act(() => {
      result.current.handleSubmit(event);
    });

    expect(openSpy).toHaveBeenCalledOnce();
    const url = openSpy.mock.calls[0][0] as string;
    expect(url).toContain('wa.me/6281319436485');
    expect(url).toContain('Budi');
  });

  it('resets tanggalValue after a successful submit', () => {
    vi.spyOn(window, 'open').mockImplementation(() => null);
    const { result } = renderHook(() => useHampersForm());

    act(() => {
      result.current.setTanggalValue('15 Mar 2026');
    });

    const form = document.createElement('form');
    form.reset = vi.fn();
    const event = { preventDefault: vi.fn(), target: form } as unknown as React.FormEvent;

    act(() => {
      result.current.handleSubmit(event);
    });

    expect(result.current.tanggalValue).toBe('');
  });
});
