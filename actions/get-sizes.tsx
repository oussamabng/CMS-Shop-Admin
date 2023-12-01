import { Size } from "@/types";
import { domaine } from "./domaine";

const getSizes = async (storeId: string): Promise<Size[]> => {
  const URL = `${domaine}/api/${storeId}/sizes`;

  const response = await fetch(URL);

  return response.json();
};

export default getSizes;
