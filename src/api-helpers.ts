import { APIType, CrudListCallProps, CrudUpdateCallProps, GenericObject } from "./api.types";

export const CRUD_METHODS = (api: APIType) => ({
  add: {
    key: "add",
    callBuilder:
      (path: string) =>
      (fields: GenericObject): Promise<GenericObject> =>
        api.call(path, { body: { fields } }),
  },
  delete: {
    key: "delete",
    callBuilder:
      (path: string) =>
      (id: string): Promise<GenericObject> =>
        api.call(path, { body: { id } }),
  },
  fields: {
    key: "fields",
    callBuilder: (path: string) => (): Promise<GenericObject> => api.call(path),
  },
  get: {
    key: "get",
    callBuilder:
      (path: string) =>
      (id: string): Promise<GenericObject> =>
        api.call(path, { body: { id } }),
  },
  list: {
    key: "list",
    callBuilder:
      (path: string) =>
      (options: CrudListCallProps): Promise<GenericObject> =>
        api.call(path, { body: { ...options } }),
  },
  update: {
    key: "update",
    callBuilder:
      (path: string) =>
      (options: CrudUpdateCallProps): Promise<GenericObject> =>
        api.call(path, { body: { ...options } }),
  },
});

