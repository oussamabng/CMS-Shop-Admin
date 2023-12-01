import { Category } from "@/types";
import { domaine } from "./domaine";

const getCategory = async (
  storeId: string,
  categoryId: string
): Promise<Category> => {
  const URL = `${domaine}/api/${storeId}/categories/${categoryId}`;

  const response = await fetch(URL);

  return response.json();
};

export default getCategory;
