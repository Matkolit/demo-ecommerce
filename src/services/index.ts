import type { usePagination } from "@/hooks";
import type { RootProducts } from "@/types";

export const services = {
  fetchProducts: async (
    url: string,
    pagination: ReturnType<typeof usePagination>,
  ): Promise<RootProducts> => {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Błąd HTTP: ${response.status}`);
    }
    const data = await response.json();
    pagination.setTotal(data.total);
    return data;
  },
};
