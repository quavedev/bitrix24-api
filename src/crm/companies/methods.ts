import { APIType, MethodBuilder, MethodsBuilder } from "../../api.types";
import { CRUD_METHODS } from "../../api-helpers";
import { USER_SHARED_METHODS } from "../user-shared-methods/user-shared-method";
import { CONTACT_SHARED_METHODS } from "../contact-shared-methods/contact-shared-method";

export const COMPANY_METHODS: MethodBuilder = (
  api: APIType
): MethodsBuilder => ({
  ...CRUD_METHODS(api),
  ...USER_SHARED_METHODS(api),
  ...CONTACT_SHARED_METHODS(api),
});
