import {
  APIType,
  CrudDefaultMethodsType,
  GenericObject,
} from "../../api.types";
import { CRUD_METHODS } from "../../api-helpers";

export interface LeadApiType extends CrudDefaultMethodsType {
  productRowsGet(id: string): Promise<Object>;
  productRowsSet(id: string, rows: GenericObject[]): Promise<Object>;
}

const CUSTOM_METHODS = (api: APIType) => ({
  productRowsGet: {
    key: "productrows.get",
    callBuilder:
      (path: string) =>
      (id: string): Promise<Object> =>
        api.call(path, { body: { id } }),
  },
  productRowsSet: {
    key: "productrows.set",
    callBuilder:
      (path: string) =>
      (id: string, rows: GenericObject[]): Promise<Object> =>
        api.call(path, { body: { id, rows } }),
  },
});

export const LEAD_METHODS = (api: APIType) => ({
  ...CRUD_METHODS(api),
  ...CUSTOM_METHODS(api),
});
