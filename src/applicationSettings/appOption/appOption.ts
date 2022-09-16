import { Config } from "../../api.types";
import { AppOptionApiType } from "./appOption.types";
import { APP_OPTION_METHODS } from "./methods";
import { buildApiMethods } from "../../api-helpers";

export const AppOptionAPI = (config: Config): AppOptionApiType => {
  return buildApiMethods(
    config,
    "appOption",
    APP_OPTION_METHODS
  ) as AppOptionApiType;
};
