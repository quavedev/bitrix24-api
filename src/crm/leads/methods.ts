import { MethodsBuilder } from "../../api.types";
import { CRUD_METHODS } from "../../api-helpers";
import { PRODUCT_SHARED_METHODS } from "../product-shared-methods/product-shared-method";
import { USER_SHARED_METHODS } from "../user-shared-methods/user-shared-method";

export const LEAD_METHODS: MethodsBuilder = {
  ...CRUD_METHODS,
  ...PRODUCT_SHARED_METHODS,
  ...USER_SHARED_METHODS,
};
