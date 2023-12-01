import { Billboard } from "@/types";
import { domaine } from "./domaine";

const getBillboard = async (
  storeId: string,
  billboardId: string
): Promise<Billboard> => {
  const URL = `${domaine}/api/${storeId}/billboards/${billboardId}`;

  const response = await fetch(URL);

  return response.json();
};

export default getBillboard;
