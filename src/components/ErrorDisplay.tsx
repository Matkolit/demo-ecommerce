import React from "react";

interface ErrorMessageProps {
  message?: string;
  details?: string;
  onRetry?: () => void;
}

export const ErrorDisplay: React.FC<ErrorMessageProps> = ({
  message = "Wystąpił błąd. Spróbuj ponownie później.",
  details,
  onRetry,
}) => {
  return (
    <div
      role="alert"
      aria-live="polite"
      className="rounded border border-red-300 bg-red-50 p-4 text-red-700 text-sm space-y-2">
      <p className="font-medium">{message}</p>
      {details ? <p className="text-xs opacity-80 break-all">{details}</p> : null}
      {onRetry && (
        <button
          type="button"
          onClick={onRetry}
          className="inline-flex items-center gap-1 px-3 py-1 rounded bg-red-600 text-white text-xs font-medium hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400">
          Spróbuj ponownie
        </button>
      )}
    </div>
  );
};
