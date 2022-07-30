import { APIType, GenericObject, MethodsBuilder } from "../../api.types";

export interface ProductSharedMethodApiType {
  productRowsGet(id: string): Promise<object>;
  productRowsSet(id: string, rows: GenericObject[]): Promise<object>;
}

export const PRODUCT_SHARED_METHODS: MethodsBuilder = {
  productRowsGet: {
    key: "productrows.get",
    callBuilder:
      (api: APIType, path: string) =>
      (id: string): Promise<object> =>
        api.call(path, { body: { id } }),
  },
  productRowsSet: {
    key: "productrows.set",
    callBuilder:
      (api: APIType, path: string) =>
      (id: string, rows: GenericObject[]): Promise<object> =>
        api.call(path, { body: { id, rows } }),
  },
};
