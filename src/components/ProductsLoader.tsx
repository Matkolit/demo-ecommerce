import { Skeleton } from ".";

export const ProductsLoader = () => {
  return Array.from({ length: 5 }).map((_, index) => (
    <Skeleton key={index} className="h-[245px] w-[176px]" />
  ));
};
