import {
  APIType,
  Config,
  CrudListCallProps,
  CrudUpdateCallProps,
  GenericObject,
  MethodBuilder,
  MethodsBuilder,
} from "./api.types";
import { API } from "./api";

export const CRUD_METHODS: MethodBuilder = (api: APIType): MethodsBuilder => ({
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

export const buildApiMethods: any = (
  config: Config,
  methodPrefix: string,
  methodBuild: MethodBuilder
): APIType => {
  const api = new API(config);
  const entries = Object.entries(methodBuild(api));
  return entries.reduce(
    (acc, [method, { key, callBuilder }]) => ({
      ...acc,
      [method]: callBuilder(`${methodPrefix}.${key}`),
    }),
    {} as APIType
  );
};
