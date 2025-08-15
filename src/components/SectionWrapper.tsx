import type { PropsWithChildren } from "react";

export const ProductsWrapper = ({ children }: PropsWithChildren) => {
  return <div className="grid grid-cols-[repeat(auto-fit,176px))] mt-6 gap-3">{children}</div>;
};
