import { API } from "../../api";
import { Config } from "../../api.types";
import { LEAD_METHODS, LeadApiType } from "./lead.types";

export const LeadAPI = (config: Config): LeadApiType => {
  const api = new API(config);
  const entries = Object.entries(LEAD_METHODS(api));
  return entries.reduce(
    (acc, [method, { key, callBuilder }]) => ({
      ...acc,
      [method]: callBuilder(`crm.lead.${key}`),
    }),
    {} as LeadApiType
  );
};
