import type { Product } from "@/types";
import { Heading } from ".";

export const ProductCard = ({ title, price, thumbnail }: Partial<Product>) => {
  const alt = `Zdjęcie produktu: ${title}`;
  return (
    <article className="flex hover:shadow-sm  transition-shadow duration-200 rounded-xl">
      <a
        href="#"
        className="focus:outline-none  rounded-xl transition-shadow  h-full focus:ring-2 focus:ring-secondary focus:ring-offset-2 "
        aria-label={`Zobacz szczegóły produktu: ${title}, cena: $${price}`}>
        <figure className="bg-gray-100 size-[176px] p-1 rounded-xl">
          <img
            src={thumbnail}
            alt={alt}
            loading="lazy"
            className="aspect-square size-full object-cover rounded-lg"
          />
        </figure>
        <div className="p-3 flex flex-col justify-between">
          <Heading level={3} className="font-medium text-gray-900">
            {title}
          </Heading>
          <p className="text-secondary">{`$${price}`}</p>
        </div>
      </a>
    </article>
  );
};
