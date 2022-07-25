import { Config } from "../../api.types";
import { ProductApiType } from "./product.types";
import { buildApiMethods } from "../../api-helpers";
import { PRODUCT_METHODS } from "./methods";

export const ProductAPI = (config: Config): ProductApiType => {
  return buildApiMethods(
    config,
    "crm.product",
    PRODUCT_METHODS
  ) as ProductApiType;
};
