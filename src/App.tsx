import "./App.css";
import { EmptyState, ErrorDisplay, Pagination, ProductsSection, Wrapper, Nav } from "./components";
import { useEffect, useState } from "react";
import { type RootProducts } from "./types";
import { FetcherStatus } from "./constants";
import { usePagination, useFetcher } from "./hooks";
import { api } from "./utils";
import { services } from "./services";

const App = () => {
  const [query, setQuery] = useState("");

  const pagination = usePagination();

  const { data, status, setData, error } = useFetcher<RootProducts>({
    queryFn: async () => {
      const url = api.buildSearchUrl(query, pagination.skip);
      return services.fetchProducts(url, pagination);
    },
    enable: true,
    deps: [query, pagination.skip],
    omitDebounceWhen: (d) => d[0] === "",
  });

  useEffect(() => {
    pagination.setSkip(0);
    setData(null);
  }, [query]);

  const renderMainContent = () => {
    if (status === FetcherStatus.ERROR) {
      return <ErrorDisplay />;
    }

    if (query === "") {
      return (
        <div className="space-y-6">
          <ProductsSection
            status={status}
            products={data?.products.slice(0, 6)}
            heading={{ title: "Featured Products" }}
          />
          <ProductsSection
            status={status}
            products={data?.products.slice(6, 12)}
            heading={{ title: "New Arrivals" }}
          />
        </div>
      );
    }

    return (
      <ProductsSection
        status={status}
        products={data?.products}
        heading={{ title: `Szukany Produkt: "${query}"` }}
      />
    );
  };

  const shouldShowEmptyState = () => {
    return status !== FetcherStatus.LOADING && !data?.products?.length && !error;
  };

  const shouldShowPagination = () => {
    return !!data?.products?.length;
  };
  return (
    <Wrapper>
      <Nav query={query} setQuery={setQuery} />
      <main className="text-burgund max-w-[960px] p-4 mt-4 mx-auto mb-10">
        {renderMainContent()}
        {shouldShowEmptyState() && <EmptyState query={query} onClear={() => setQuery("")} />}
        {shouldShowPagination() && (
          <Pagination {...pagination} isLoading={status === FetcherStatus.LOADING} />
        )}
      </main>
    </Wrapper>
  );
};

export default App;
