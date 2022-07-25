import { Config } from "../../api.types";
import { CaregoryApiType } from "./category.types";
import { CATEGORY_METHODS } from "./methods";
import { buildApiMethods } from "../../api-helpers";

export const CategoryAPI = (config: Config): CaregoryApiType => {
  return buildApiMethods(
    config,
    "crm.category",
    CATEGORY_METHODS
  ) as CaregoryApiType;
};
