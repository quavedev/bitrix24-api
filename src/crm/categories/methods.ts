import {
  APIType,
  GenericObject,
  MethodsBuilder,
  MethodsDefBuilder,
} from "../../api.types";

export const CATEGORY_METHODS_DEF: MethodsDefBuilder = {
  add:
    (api: APIType, path: string) =>
    (entityTypeId: number, fields: object): Promise<object> =>
      api.call(path, { body: { fields, entityTypeId } }),
  delete:
    (api: APIType, path: string) =>
    (entityTypeId: number, id: number): Promise<object> =>
      api.call(path, { body: { id, entityTypeId } }),
  fields:
    (api: APIType, path: string) =>
    (entityTypeId: number): Promise<object> =>
      api.call(path, { body: { entityTypeId } }),
  get:
    (api: APIType, path: string) =>
    (entityTypeId: number, id: number): Promise<object> =>
      api.call(path, { body: { id, entityTypeId } }),

  list:
    (api: APIType, path: string) =>
    (entityTypeId: number): Promise<object> =>
      api.call(path, { body: { entityTypeId } }),

  update:
    (api: APIType, path: string) =>
    (
      entityTypeId: number,
      id: number,
      fields: GenericObject,
      params?: GenericObject
    ): Promise<object> =>
      api.call(path, { body: { entityTypeId, id, fields, params } }),
};

export const CATEGORY_METHODS: MethodsBuilder = {
  add: {
    key: "add",
    callBuilder: CATEGORY_METHODS_DEF.add,
  },
  delete: {
    key: "delete",
    callBuilder: CATEGORY_METHODS_DEF.delete,
  },
  fields: {
    key: "fields",
    callBuilder: CATEGORY_METHODS_DEF.fields,
  },
  get: {
    key: "get",
    callBuilder: CATEGORY_METHODS_DEF.get,
  },
  list: {
    key: "list",
    callBuilder: CATEGORY_METHODS_DEF.list,
  },
  update: {
    key: "update",
    callBuilder: CATEGORY_METHODS_DEF.update,
  },
};
