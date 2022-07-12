import { getDeals } from "./deals/deals";
import { getLeads } from "./leads/leads";

export const Bitrix24 = ({ apiKey }) => {
  if (!apiKey) {
    throw new Error("The API Key is required");
  }
  if (typeof apiKey !== "string") {
    throw new Error(`The API Key is not a string. Is a a ${typeof apiKey}`);
  }
  if (apiKey.length !== 16) {
    throw new Error(`The API Key needed to be 16 characteres`);
  }
  return {
    crm: {
      deals: getDeals(apiKey),
      leads: getLeads(apiKey),
    },
  };
};
