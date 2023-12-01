import { Color } from "@/types";
import { domaine } from "./domaine";

const getColors = async (storeId: string): Promise<Color[]> => {
  const URL = `${domaine}/api/${storeId}/colors`;

  const response = await fetch(URL);

  return response.json();
};

export default getColors;
