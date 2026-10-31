import { useMemo, useState } from "react";

import { compareEth } from "@/lib/format";

import { catalogNfts, MAX_PRICE_ETH } from "./data";
import type { CatalogSort, CatalogTab } from "./types";

const TAB_LIMIT = 6;

function sortCatalog(items: typeof catalogNfts, sort: CatalogSort) {
  switch (sort) {
    case "populares":
      return items.toSorted((left, right) => right.trendingScore - left.trendingScore);
    case "recentes":
      return items.toSorted(
        (left, right) => Date.parse(right.createdAt) - Date.parse(left.createdAt),
      );
    case "preco-asc":
      return items.toSorted((left, right) => compareEth(left.priceEth, right.priceEth));
    case "preco-desc":
      return items.toSorted((left, right) => compareEth(right.priceEth, left.priceEth));
  }
}

export function useCatalogFilters() {
  const [tab, setTab] = useState<CatalogTab>("todos");
  const [sort, setSort] = useState<CatalogSort>("populares");
  const [categoryId, setCategoryId] = useState<string | null>(null);
  const [networkId, setNetworkId] = useState<string | null>(null);
  const [priceDraft, setPriceDraft] = useState(MAX_PRICE_ETH);
  const [maxPriceEth, setMaxPriceEth] = useState(MAX_PRICE_ETH);

  const nfts = useMemo(() => {
    let items = catalogNfts.toSorted((left, right) => right.trendingScore - left.trendingScore);

    if (tab === "em-alta") {
      items = items.slice(0, TAB_LIMIT);
    } else if (tab === "recentes") {
      items = items
        .toSorted((left, right) => Date.parse(right.createdAt) - Date.parse(left.createdAt))
        .slice(0, TAB_LIMIT);
    }

    const filtered = items.filter((nft) => {
      if (categoryId && nft.categoryId !== categoryId) return false;
      if (networkId && nft.networkId !== networkId) return false;
      return compareEth(nft.priceEth, maxPriceEth.toFixed(2)) <= 0;
    });

    return sortCatalog(filtered, sort);
  }, [tab, sort, categoryId, networkId, maxPriceEth]);

  const hasActiveFilters =
    categoryId !== null ||
    networkId !== null ||
    maxPriceEth < MAX_PRICE_ETH ||
    tab !== "todos" ||
    sort !== "populares";

  function resetFilters() {
    setTab("todos");
    setSort("populares");
    setCategoryId(null);
    setNetworkId(null);
    setPriceDraft(MAX_PRICE_ETH);
    setMaxPriceEth(MAX_PRICE_ETH);
  }

  return {
    nfts,
    tab,
    setTab,
    sort,
    setSort,
    categoryId,
    setCategoryId,
    networkId,
    setNetworkId,
    priceDraft,
    setPriceDraft,
    maxPriceEth,
    applyPrice: () => setMaxPriceEth(priceDraft),
    hasActiveFilters,
    resetFilters,
  };
}

export type CatalogFiltersState = ReturnType<typeof useCatalogFilters>;
