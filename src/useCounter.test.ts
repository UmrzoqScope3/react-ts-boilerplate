import { renderHook, act } from "@testing-library/react";
import useCounter from "./useCounter";

test("should increment", () => {
  const { result } = renderHook(() => useCounter());
  const times: number = 3;

  for (let i = 0; i < times; i++) {
    act(() => {
      result.current.increment();
    });
  }

  expect(result.current.count).toBe(times);
});
