import { renderHook, act } from '@testing-library/react';
import { describe, it, expect, vi, afterEach } from 'vitest';
import { useDatePicker } from './useDatePicker';

const noop = () => {};

describe('useDatePicker', () => {
  afterEach(() => {
    document.body.innerHTML = '';
  });

  it('starts with open: false', () => {
    const onChange = noop;
    const { result } = renderHook(() => useDatePicker('', onChange));
    expect(result.current.open).toBe(false);
  });

  it('initialises viewYear and viewMonth to the current date', () => {
    const today = new Date();
    const onChange = noop;
    const { result } = renderHook(() => useDatePicker('', onChange));
    expect(result.current.viewYear).toBe(today.getFullYear());
    expect(result.current.viewMonth).toBe(today.getMonth());
  });

  it('navigates to the previous month when prevMonth is called', () => {
    const today = new Date();
    const onChange = noop;
    const { result } = renderHook(() => useDatePicker('', onChange));

    act(() => {
      result.current.prevMonth();
    });

    const expectedMonth = today.getMonth() === 0 ? 11 : today.getMonth() - 1;
    expect(result.current.viewMonth).toBe(expectedMonth);
  });

  it('navigates to the next month when nextMonth is called', () => {
    const today = new Date();
    const onChange = noop;
    const { result } = renderHook(() => useDatePicker('', onChange));

    act(() => {
      result.current.nextMonth();
    });

    const expectedMonth = today.getMonth() === 11 ? 0 : today.getMonth() + 1;
    expect(result.current.viewMonth).toBe(expectedMonth);
  });

  it('wraps year back when prevMonth is called on January', () => {
    const onChange = noop;
    const { result } = renderHook(() => useDatePicker('', onChange));

    // Navigate back to January of the current year
    const stepsToJan = result.current.viewMonth;
    for (let i = 0; i < stepsToJan; i++) {
      act(() => result.current.prevMonth());
    }
    const yearBeforeWrap = result.current.viewYear;

    act(() => {
      result.current.prevMonth();
    });

    expect(result.current.viewMonth).toBe(11);
    expect(result.current.viewYear).toBe(yearBeforeWrap - 1);
  });

  it('calls onChange with a formatted date string when a future day is selected', () => {
    const onChange = vi.fn();
    const { result } = renderHook(() => useDatePicker('', onChange));

    // Navigate far enough into the future to guarantee a selectable day
    act(() => {
      result.current.nextMonth();
    });

    act(() => {
      result.current.selectDay(15);
    });

    expect(onChange).toHaveBeenCalledOnce();
    const formatted: string = onChange.mock.calls[0][0];
    expect(formatted).toMatch(/\d+/);
  });

  it('does not call onChange when a past day is selected', () => {
    const onChange = vi.fn();
    const today = new Date();
    const { result } = renderHook(() => useDatePicker('', onChange));

    // Navigate to previous month where all days are in the past
    act(() => {
      result.current.prevMonth();
    });

    act(() => {
      result.current.selectDay(1);
    });

    if (today.getDate() > 1 || today.getMonth() !== result.current.viewMonth) {
      expect(onChange).not.toHaveBeenCalled();
    }
  });

  it('exposes cells as an array covering the full month grid', () => {
    const { result } = renderHook(() => useDatePicker('', () => {}));
    expect(Array.isArray(result.current.cells)).toBe(true);
    expect(result.current.cells.length).toBeGreaterThanOrEqual(28);
  });

  it('wraps year forward when nextMonth is called on December', () => {
    const onChange = noop;
    const { result } = renderHook(() => useDatePicker('', onChange));

    // Navigate forward to December
    const stepsToDecember = 11 - result.current.viewMonth;
    for (let i = 0; i < stepsToDecember; i++) {
      act(() => result.current.nextMonth());
    }
    const yearBeforeWrap = result.current.viewYear;

    act(() => {
      result.current.nextMonth();
    });

    expect(result.current.viewMonth).toBe(0);
    expect(result.current.viewYear).toBe(yearBeforeWrap + 1);
  });

  it('parses a valid value string and returns the correct selected date', () => {
    const today = new Date();
    const futureYear = today.getFullYear() + 1;
    const { result } = renderHook(() => useDatePicker(`15 Jan ${futureYear}`, () => {}));
    expect(result.current.selected).not.toBeNull();
    expect(result.current.selected?.getFullYear()).toBe(futureYear);
    expect(result.current.selected?.getMonth()).toBe(0);
    expect(result.current.selected?.getDate()).toBe(15);
  });

  it('returns null for selected when value has an unrecognised month', () => {
    const { result } = renderHook(() => useDatePicker('15 Foo 2026', () => {}));
    expect(result.current.selected).toBeNull();
  });

  it('returns null for selected when value has wrong number of parts', () => {
    const { result } = renderHook(() => useDatePicker('15-Jan-2026', () => {}));
    expect(result.current.selected).toBeNull();
  });

  it('does not close the calendar when ref.current is null on mousedown', () => {
    const { result } = renderHook(() => useDatePicker('', () => {}));

    // Leave ref.current as null (no DOM node assigned)
    act(() => {
      result.current.setOpen(true);
    });

    act(() => {
      document.dispatchEvent(new MouseEvent('mousedown', { bubbles: true }));
    });

    // ref.current is null so the handler short-circuits; open remains true
    expect(result.current.open).toBe(true);
  });

  it('closes the calendar when outside mousedown fires after open', () => {
    const { result } = renderHook(() => useDatePicker('', () => {}));

    const container = document.createElement('div');
    document.body.appendChild(container);
    result.current.ref.current = container;

    act(() => {
      result.current.setOpen(true);
    });

    act(() => {
      const outside = document.createElement('span');
      document.body.appendChild(outside);
      document.dispatchEvent(
        new MouseEvent('mousedown', { bubbles: true, relatedTarget: outside }),
      );
    });

    expect(result.current.open).toBe(false);
  });
});
