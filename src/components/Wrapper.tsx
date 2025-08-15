import type { PropsWithChildren } from "react";

export const Wrapper = ({ children }: PropsWithChildren) => {
  return <div className="container mx-auto">{children}</div>;
};
