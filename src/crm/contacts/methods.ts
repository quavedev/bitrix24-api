import { CRUD_METHODS } from "../../api-helpers";
import { APIType, GenericObject, MethodsBuilder } from "../../api.types";

const COMPANY_METHODS: MethodsBuilder = {
  companyAdd: {
    key: "company.add",
    callBuilder:
      (api: APIType, path: string) =>
      (id: string, fields: GenericObject): Promise<object> =>
        api.call(path, { body: { id, fields } }),
  },
  companyDelete: {
    key: "company.delete",
    callBuilder:
      (api: APIType, path: string) =>
      (id: string, fields: GenericObject): Promise<object> =>
        api.call(path, { body: { id, fields } }),
  },
};

export const CONTACT_METHODS: MethodsBuilder = {
  ...CRUD_METHODS,
  ...COMPANY_METHODS,
};
