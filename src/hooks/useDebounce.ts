import { useCallback, useEffect, useRef, type DependencyList } from "react";

const DefaultDelayTime = 300;

type AnyFunction = (...args: unknown[]) => void;

interface DebounceHandle<T extends AnyFunction> {
  (...args: Parameters<T>): void;
}

export const useDebounce = <T extends AnyFunction>(
  callbackFn: T,
  delay: number = DefaultDelayTime,
  deps: DependencyList = [],
): DebounceHandle<T> => {
  const ref = useRef<{
    timer: null | ReturnType<typeof setTimeout>;
    callbackFn: T;
  }>({
    callbackFn,
    timer: null,
  });

  useEffect(() => {
    ref.current.callbackFn = callbackFn;
  }, [callbackFn]);

  // Tutaj użyłem useCallback aby zachować referencją do funkcji, żeby uniknąć nie potrzebnego renderowania np. gdyby  była potrzeba przekazać debounce do innego komponentu przez propsy
  return useCallback(
    (...args: Parameters<T>) => {
      if (!ref.current.callbackFn) return;
      if (ref.current.timer) {
        clearTimeout(ref.current.timer);
      }
      ref.current.timer = setTimeout(() => {
        ref.current.callbackFn(...args);
      }, delay);
    },
    [delay, ...deps],
  );
};
