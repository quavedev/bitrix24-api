import { Config } from "../../api.types";
import { CompanyApiType } from "./company.types";
import { COMPANY_METHODS } from "./methods";
import { buildApiMethods } from "../../api-helpers";

export const CompanyAPI = (config: Config): CompanyApiType => {
  return buildApiMethods(
    config,
    "crm.company",
    COMPANY_METHODS
  ) as CompanyApiType;
};
