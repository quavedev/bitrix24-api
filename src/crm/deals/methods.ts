import { APIType, MethodBuilder, MethodsBuilder } from "../../api.types";
import { CRUD_METHODS } from "../../api-helpers";
import { PRODUCT_SHARED_METHODS } from "../product-shared-methods/product-shared-method";
import { USER_SHARED_METHODS } from "../user-shared-methods/user-shared-method";

export const DEAL_METHODS: MethodBuilder = (api: APIType): MethodsBuilder => ({
  ...CRUD_METHODS(api),
  ...PRODUCT_SHARED_METHODS(api),
  ...USER_SHARED_METHODS(api),
});
