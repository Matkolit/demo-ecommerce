import type { Product } from "@/types";
import { ProductCard, Heading, ProductsWrapper, ProductsLoader } from ".";
import type { ComponentProps } from "react";
import { FetcherStatus } from "@/constants";

interface ProductsSectionProps {
  products?: Product[];
  heading: ComponentProps<typeof Heading>;
  status: FetcherStatus;
}

export const ProductsSection = ({ status, products, heading }: ProductsSectionProps) => {
  return (
    <section className="flex flex-col gap-2">
      <Heading {...heading} />
      <ProductsWrapper>
        {status === FetcherStatus.LOADING ? (
          <div role="status" aria-live="polite" className="contents">
            <ProductsLoader />
            <span className="sr-only">Ładowanie produktów</span>
          </div>
        ) : (
          products?.map((i) => {
            return <ProductCard key={i.id} {...i} />;
          })
        )}
      </ProductsWrapper>
    </section>
  );
};
