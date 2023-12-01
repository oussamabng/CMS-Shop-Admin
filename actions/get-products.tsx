import qs from "query-string";

import { Product } from "@/types";
import { domaine } from "./domaine";

interface Query {
  categoryId?: string;
  colorId?: string;
  sizeId?: string;
  isFeatured?: boolean;
}

const getProducts = async (
  storeId: string,
  query: Query
): Promise<Product[]> => {
  const URL = `${domaine}/api/${storeId}/products`;

  const url = qs.stringifyUrl({
    url: URL,
    query: {
      colorId: query.colorId,
      sizeId: query.sizeId,
      categoryId: query.categoryId,
      isFeatured: query.isFeatured,
    },
  });
  const response = await fetch(url);

  return response.json();
};

export default getProducts;
