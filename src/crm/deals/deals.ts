import { Config } from "../../api.types";
import { DealApiType } from "./deal.types";
import { DEAL_METHODS } from "./methods";
import { buildApiMethods } from "../../api-helpers";

export const DealAPI = (config: Config): DealApiType => {
  return buildApiMethods(config, "crm.deal", DEAL_METHODS) as DealApiType;
};
