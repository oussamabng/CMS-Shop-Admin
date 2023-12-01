import { Category } from "@/types";
import { domaine } from "./domaine";

const getCategories = async (storeId: string): Promise<Category[]> => {
  const URL = `${domaine}/api/${storeId}/categories`;

  const response = await fetch(URL);

  return response.json();
};

export default getCategories;
