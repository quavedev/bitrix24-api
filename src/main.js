import { getDeals } from "./deals/deals";
import { getLeads } from "./leads/leads";

export const Bitrix24 = ({ apiKey }) => {
  if (!apiKey) {
    throw new Error("The API Key was expected in Bitrix24-api library!");
  }
  if (typeof apiKey !== "string") {
    throw new Error(`The API Key is a string not a ${typeof apiKey}`);
  }
  if (apiKey.length !== 16) {
    throw new Error(`The API expects 16 characteres`);
  }
  return {
    crm: {
      deals: getDeals(apiKey),
      leads: getLeads(apiKey),
    },
  };
};

