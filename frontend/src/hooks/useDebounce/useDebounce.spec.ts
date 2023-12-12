import { useDebounce } from "./index"
import { renderHook } from "@testing-library/react"

describe('useDebounce test suite', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.clearAllTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  it("should call the debounced function", () => {
    const func = jest.fn()
    const hook = renderHook(() => useDebounce(func, 10))
    hook.result.current()
    jest.advanceTimersByTime(10)
    expect(func).toHaveBeenCalledTimes(1)
  })

  it("should only call the debounced function when it stops getting fired for a few seconds", () => {
    const func = jest.fn()
    const hook = renderHook(() => useDebounce(func, 100))
    hook.result.current()

    jest.advanceTimersByTime(50)
    hook.result.current()

    jest.advanceTimersByTime(80)
    hook.result.current()

    jest.advanceTimersByTime(20)
    hook.result.current()

    jest.advanceTimersByTime(200)

    expect(func).toHaveBeenCalledTimes(1)
  })
})