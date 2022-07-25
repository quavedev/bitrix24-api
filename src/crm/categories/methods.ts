import {
  APIType,
  GenericObject,
  MethodBuilder,
  MethodsBuilder,
} from "../../api.types";

export const CATEGORY_METHODS: MethodBuilder = (
  api: APIType
): MethodsBuilder => ({
  add: {
    key: "add",
    callBuilder:
      (path: string) =>
      (entityTypeId: number, fields: GenericObject): Promise<GenericObject> =>
        api.call(path, { body: { fields } }),
  },
  delete: {
    key: "delete",
    callBuilder: (path) => (entityTypeId: number, id) =>
      api.call(path, { body: { id } }),
  },
  fields: {
    key: "fields",
    callBuilder: (path) => () => api.call(path),
  },
  get: {
    key: "get",
    callBuilder: (path) => (entityTypeId: number, id) =>
      api.call(path, { body: { id } }),
  },
  list: {
    key: "list",
    callBuilder: (path) => (entityTypeId: number, options) =>
      api.call(path, { body: Object.assign({}, { ...options, entityTypeId }) }),
  },
  update: {
    key: "update",
    callBuilder: (path) => (entityTypeId: number, options) =>
      api.call(path, { body: Object.assign({}, { ...options, entityTypeId }) }),
  },
});
