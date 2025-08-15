import { useCallback, useEffect, useRef, useState, type DependencyList } from "react";
import { FetcherStatus } from "../constants";
import { useDebounce } from ".";

export function useFetcher<T>({
  enable,
  queryFn,
  omitDebounceWhen,
  deps = [],
}: {
  queryFn: () => Promise<T>;
  enable: boolean;
  deps?: DependencyList;
  omitDebounceWhen?: (nextDeps: DependencyList) => boolean;
}) {
  const [status, setStatus] = useState(FetcherStatus.LOADING);
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const getQuery = useCallback(async () => {
    setStatus(FetcherStatus.LOADING);
    try {
      const result = await queryFn();
      setData(result);
      setStatus(FetcherStatus.SUCCESS);
    } catch (error) {
      setStatus(FetcherStatus.ERROR);
      if (error instanceof Error) {
        setError(error?.message);
      }
      console.error("Error fetching data:", error);
    }
  }, [queryFn]);

  const debounceFn = useDebounce(getQuery, 300);

  useEffect(() => {
    if (enable) {
      getQuery();
    }
  }, []);

  const isFirstDepsRun = useRef(true);
  useEffect(() => {
    const shouldImmediate = omitDebounceWhen ? omitDebounceWhen(deps) : false;
    if (enable && !isFirstDepsRun.current) {
      if (shouldImmediate) {
        getQuery();
      } else {
        setStatus(FetcherStatus.LOADING);
        debounceFn();
      }
    }
    isFirstDepsRun.current = false;
  }, [...deps]);

  return { status, data, getQuery, error, setData };
}
