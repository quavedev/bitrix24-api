import { Config } from "../../api.types";
import { LeadApiType } from "./lead.types";
import { LEAD_METHODS } from "./methods";
import { buildApiMethods } from "../../api-helpers";

export const LeadAPI = (config: Config): LeadApiType => {
  return buildApiMethods(config, "crm.lead", LEAD_METHODS) as LeadApiType;
};
