import { API } from "./api";
import {
  APIType,
  Config,
  CrudListCallProps,
  CrudUpdateCallProps,
  MethodsBuilder,
  MethodsDefBuilder,
} from "./api.types";

export const CRUD_METHODS_DEF: MethodsDefBuilder = {
  add:
    (api: APIType, path: string) =>
    (fields: object): Promise<object> =>
      api.call(path, { body: { fields } }),
  delete:
    (api: APIType, path: string) =>
    (id: string): Promise<object> =>
      api.call(path, { body: { id } }),
  fields: (api: APIType, path: string) => (): Promise<object> => api.call(path),

  get:
    (api: APIType, path: string) =>
    (id: string): Promise<object> =>
      api.call(path, { body: { id } }),

  getWithBodyParams:
    (api: APIType, path: string) =>
    (params: object): Promise<object> =>
      api.call(path, { body: { ...params } }),

  list:
    (api: APIType, path: string) =>
    (options: CrudListCallProps): Promise<object> =>
      api.call(path, { body: { ...options } }),

  update:
    (api: APIType, path: string) =>
    (options: CrudUpdateCallProps): Promise<object> =>
      api.call(path, { body: { ...options } }),
  noParams: (api: APIType, path: string) => (): Promise<object> =>
    api.call(path),
  withFieldsParam:
    (api: APIType, path: string) =>
    (fields: object): Promise<object> =>
      api.call(path, { body: { fields } }),
  withIdParam:
    (api: APIType, path: string) =>
    (id: string): Promise<object> =>
      api.call(path, { body: { id } }),
};

export const CRUD_METHODS: MethodsBuilder = {
  add: {
    key: "add",
    callBuilder: CRUD_METHODS_DEF.add,
  },
  delete: {
    key: "delete",
    callBuilder: CRUD_METHODS_DEF.delete,
  },
  fields: {
    key: "fields",
    callBuilder: CRUD_METHODS_DEF.fields,
  },
  get: {
    key: "get",
    callBuilder: CRUD_METHODS_DEF.get,
  },
  getWithBodyParams: {
    key: "get",
    callBuilder: CRUD_METHODS_DEF.getWithBodyParams,
  },
  list: {
    key: "list",
    callBuilder: CRUD_METHODS_DEF.list,
  },
  update: {
    key: "update",
    callBuilder: CRUD_METHODS_DEF.update,
  },
};

export const buildApiMethods: any = (
  config: Config,
  methodPrefix: string,
  methodBuild: MethodsBuilder
): APIType => {
  const api = new API(config);
  const entries = Object.entries(methodBuild);
  return entries.reduce(
    (acc, [method, { key, callBuilder }]) => ({
      ...acc,
      [method]: callBuilder(api, `${methodPrefix}.${key}`),
    }),
    {} as APIType
  );
};
