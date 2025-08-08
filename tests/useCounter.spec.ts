import { renderHook, act } from '@testing-library/react';
import useCounter from '../src/hooks/features/homepage/useCounter';
import { describe, it } from 'node:test';

describe('useCounter', () => {
  it('should initialize count to 0 and val to 1', () => {
    const { result } = renderHook(() => useCounter());
    expect(result.current.count).toBe(0);
    expect(result.current.val).toBe(1);
  });

  it('should increment count by val', () => {
    const { result } = renderHook(() => useCounter());
    act(() => {
      result.current.increment();
    });
    expect(result.current.count).toBe(1);
  });

  it('should update val and increment by new val', () => {
    const { result } = renderHook(() => useCounter());
    act(() => {
      result.current.setVal(5);
      result.current.increment();
    });
    expect(result.current.count).toBe(5);
  });
});

function expect(count: number) {
  throw new Error('Function not implemented.');
}
