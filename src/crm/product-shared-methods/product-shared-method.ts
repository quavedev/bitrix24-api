import { APIType, GenericObject } from "../../api.types";

export interface ProductSharedMethodApiType {
  productRowsGet(id: string): Promise<object>;
  productRowsSet(id: string, rows: GenericObject[]): Promise<object>;
}

export const PRODUCT_SHARED_METHODS = (api: APIType) => ({
  productRowsGet: {
    key: "productrows.get",
    callBuilder:
      (path: string) =>
      (id: string): Promise<object> =>
        api.call(path, { body: { id } }),
  },
  productRowsSet: {
    key: "productrows.set",
    callBuilder:
      (path: string) =>
      (id: string, rows: GenericObject[]): Promise<object> =>
        api.call(path, { body: { id, rows } }),
  },
});
