import { SearchX } from "lucide-react";
import { Button, Heading } from ".";

type EmptyStateProps = {
  query?: string;
  onClear?: () => void;
};
export const EmptyState = ({ onClear, query }: EmptyStateProps) => {
  return (
    <div
      role="status"
      aria-live="polite"
      className="mt-12 border border-dashed border-light-gray rounded-xl p-10 flex flex-col items-center text-center gap-4 bg-white/60">
      <div className="w-16 h-16 rounded-full bg-secondary-light/40 flex items-center justify-center">
        <SearchX aria-hidden className="w-8 h-8 text-secondary" />
      </div>
      <Heading>Brak wyników</Heading>
      <p className="text-sm text-secondary max-w-sm">
        {query
          ? `Nie znaleziono produktów pasujących do: “${query}”.`
          : "Aktualnie brak danych do wyświetlenia."}
      </p>
      {query && (
        <Button
          onClick={onClear}
          className="mt-2 text-sm font-medium text-secondary   hover:text-secondary/80">
          Wyczyść filtr
        </Button>
      )}
    </div>
  );
};
