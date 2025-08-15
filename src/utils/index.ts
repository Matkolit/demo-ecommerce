import { PAGINATION_DEFAULTS } from "@/constants";

export const api = {
  buildSearchUrl: (query: string, skip: number) => {
    const baseUrl = import.meta.env.PUBLIC_BACKEND_URL;
    const params = new URLSearchParams({
      q: query,
      limit: PAGINATION_DEFAULTS.LIMIT.toString(),
      skip: skip.toString(),
      select: "title,price,thumbnail",
    });
    return `${baseUrl}/products/search?${params.toString()}`;
  },
};
