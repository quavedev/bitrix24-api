import {
  APIType,
  GenericObject,
  MethodBuilder,
  MethodsBuilder,
} from "../../api.types";
import { CRUD_METHODS } from "../../api-helpers";

const COMPANY_METHODS = (api: APIType) => ({
  companyAdd: {
    key: "company.add",
    callBuilder:
      (path: string) =>
      (id: string, fields: GenericObject): Promise<Object> =>
        api.call(path, { body: { id, fields } }),
  },
  companyDelete: {
    key: "company.delete",
    callBuilder:
      (path: string) =>
      (id: string, fields: GenericObject): Promise<Object> =>
        api.call(path, { body: { id, fields } }),
  },
});

export const CONTACT_METHODS: MethodBuilder = (
  api: APIType
): MethodsBuilder => ({ ...CRUD_METHODS(api), ...COMPANY_METHODS(api) });
