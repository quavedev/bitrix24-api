import { APIType, MethodBuilder, MethodsBuilder } from "../../api.types";
import { CRUD_METHODS } from "../../api-helpers";

export const CATEGORY_METHODS: MethodBuilder = (api: APIType): MethodsBuilder =>
  CRUD_METHODS(api);
