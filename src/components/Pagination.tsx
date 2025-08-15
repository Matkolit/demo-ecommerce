import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from ".";

interface PaginationProps {
  page: number;
  totalPages: number;
  isFirstPage: boolean;
  isLastPage: boolean;
  isLoading?: boolean;
  onPrev: () => void;
  onNext: () => void;
}

export const Pagination = ({
  page,
  totalPages,
  isFirstPage,
  isLastPage,
  isLoading = false,
  onPrev,
  onNext,
}: PaginationProps) => {
  return (
    <div className="flex justify-between mt-10 items-center">
      <Button
        aria-label="Przejdź do poprzedniej strony"
        disabled={isFirstPage || isLoading}
        onClick={onPrev}>
        <ChevronLeft aria-hidden />
        <span className="sr-only">Poprzednia</span>
      </Button>
      <div aria-live="polite" role="status" className="text-sm select-none text-secondary">
        Strona {page} {totalPages ? `z ${totalPages}` : null}
      </div>
      <Button
        aria-label="Przejdź do następnej strony"
        disabled={isLastPage || isLoading}
        onClick={onNext}>
        <ChevronRight aria-hidden />
        <span className="sr-only">Następna</span>
      </Button>
    </div>
  );
};
