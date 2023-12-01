import { Product } from "@/types";
import { domaine } from "./domaine";

const getProduct = async (
  storeId: string,
  productId: string
): Promise<Product> => {
  const URL = `${domaine}/api/${storeId}/products/${productId}`;

  const response = await fetch(URL);

  return response.json();
};

export default getProduct;
