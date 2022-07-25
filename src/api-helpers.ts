import { API } from "./api";
import {
  APIType,
  Config,
  GenericObject,
  MethodBuilder,
  MethodsBuilder,
} from "./api.types";

export const CRUD_METHODS: MethodBuilder = (api: APIType): MethodsBuilder => {
  const callBuilder =
    (path: string) =>
    (...params: any): Promise<GenericObject> =>
      api.call(path, { body: { ...params } });

  return {
    add: {
      key: "add",
      callBuilder,
    },
    delete: {
      key: "delete",
      callBuilder,
    },
    fields: {
      key: "fields",
      callBuilder,
    },
    get: {
      key: "get",
      callBuilder,
    },
    list: {
      key: "list",
      callBuilder,
    },
    update: {
      key: "update",
      callBuilder,
    },
  };
};

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
