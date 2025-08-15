import * as React from "react";
export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, ...props }, ref) => {
    return (
      <button
        className={`${className} inline-flex bg-secondary-light enabled:hover:bg-secondary-light/70 cursor-pointer text-secondary disabled:cursor-not-allowed items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring h-10 px-4 py-2 focus-visible:ring-offset-2  disabled:opacity-50`}
        ref={ref}
        {...props}
      />
    );
  },
);
