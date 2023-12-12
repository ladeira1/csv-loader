import { useEffect, useRef } from "react"

export const useDebounce = (callback: (props: any) => void, delay = 300) => {
  const ref = useRef<NodeJS.Timeout | null>(null)

  const debouncedCallback = (...args: any) => {
    if (ref.current) {
      clearTimeout(ref.current);
    }

    ref.current = setTimeout(() => {
      callback.apply(null, args)
    }, delay);
  };

  useEffect(() => {
    return () => {
      if (ref.current) {
        clearTimeout(ref.current);
      }
    };
  }, []);

  return debouncedCallback
}