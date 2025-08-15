export const Skeleton = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  // Również można by można skorzystac z clx do rozwiązywania konfliktów w klasach
  return <div className={`animate-pulse rounded-md bg-gray-100 ${className}`} {...props} />;
};
