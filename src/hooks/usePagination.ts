import { PAGINATION_DEFAULTS } from "@/constants";
import { useCallback, useState } from "react";

type UsePaginationOptions = Partial<{
  limit: number;
  initialSkip: number;
}>;

export const usePagination = ({
  limit = PAGINATION_DEFAULTS.LIMIT,
  initialSkip = PAGINATION_DEFAULTS.SKIP,
}: UsePaginationOptions = {}) => {
  const [skip, setSkip] = useState(initialSkip);
  const [total, setTotal] = useState<number | null>(null);
  const page = Math.floor(skip / limit) + 1;
  const totalPages = total ? Math.max(1, Math.ceil(total / limit)) : 0;

  const isFirstPage = page <= 1;
  const isLastPage = total ? skip + limit >= total : false;

  const onNext = useCallback(() => {
    if (total && skip + limit >= total) return;
    setSkip((s) => s + limit);
  }, [skip, limit, total]);

  const onPrev = useCallback(() => {
    setSkip((s) => (s - limit >= 0 ? s - limit : 0));
  }, [limit]);

  const setPage = useCallback(
    (p: number) => {
      if (p < 1) p = 1;
      if (totalPages && p > totalPages) p = totalPages;
      setSkip((p - 1) * limit);
    },
    [limit, totalPages],
  );

  return {
    // state
    skip,
    page,
    limit,
    totalPages,
    isFirstPage,
    isLastPage,
    // actions
    setSkip,
    setPage,
    setTotal,
    onNext,
    onPrev,
  };
};
