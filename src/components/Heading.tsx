import React from "react";

interface HeadingProps {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  children?: React.ReactNode;
  title?: string;
  className?: string;
}

// Dla tego demo pomijam h1 bo nie mam go gdzie na stronie użyć, żeby nie był więcej niż jeden raz
export const Heading = ({ level = 2, children, className = "", title }: HeadingProps) => {
  const Tag = `h${level}` as keyof React.JSX.IntrinsicElements;

  const levelStyles: Partial<Record<NonNullable<HeadingProps["level"]>, string>> = {
    2: "text-4xl font-bold",
    3: "text-base font-medium",
    // Można dodać więcej stylów dla innych poziomów nagłówków
    // Często spotykane jest też korzystanie z CVA lub clsx do zarządzania nadpisywaniem klas
    // z racji, że to demo nie będę tego robić
  };

  return <Tag className={`${levelStyles[level]} ${className}`}>{children || title}</Tag>;
};
