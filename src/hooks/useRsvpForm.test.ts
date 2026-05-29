import { renderHook, act } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { useRsvpForm } from './useRsvpForm';

describe('useRsvpForm', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('starts with submitted: false', () => {
    const { result } = renderHook(() => useRsvpForm());
    expect(result.current.submitted).toBe(false);
  });

  it('sets submitted: true after handleSubmit is called', () => {
    const { result } = renderHook(() => useRsvpForm());
    const mockForm = { reset: vi.fn() } as unknown as HTMLFormElement;
    const event = {
      preventDefault: vi.fn(),
      target: mockForm,
    } as unknown as React.FormEvent<HTMLFormElement>;

    act(() => {
      result.current.handleSubmit(event);
    });

    expect(result.current.submitted).toBe(true);
  });

  it('resets submitted: false after 3 seconds', () => {
    const { result } = renderHook(() => useRsvpForm());
    const mockForm = { reset: vi.fn() } as unknown as HTMLFormElement;
    const event = {
      preventDefault: vi.fn(),
      target: mockForm,
    } as unknown as React.FormEvent<HTMLFormElement>;

    act(() => {
      result.current.handleSubmit(event);
    });
    act(() => {
      vi.advanceTimersByTime(3000);
    });

    expect(result.current.submitted).toBe(false);
  });

  it('reset() sets submitted: false immediately', () => {
    const { result } = renderHook(() => useRsvpForm());
    const mockForm = { reset: vi.fn() } as unknown as HTMLFormElement;
    const event = {
      preventDefault: vi.fn(),
      target: mockForm,
    } as unknown as React.FormEvent<HTMLFormElement>;

    act(() => {
      result.current.handleSubmit(event);
    });
    act(() => {
      result.current.reset();
    });

    expect(result.current.submitted).toBe(false);
  });
});
