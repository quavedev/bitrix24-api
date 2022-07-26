import { APIType, MethodBuilder, MethodsBuilder } from "../../api.types";

export const CUSTOM_USER_METHODS: MethodBuilder = (
  api: APIType
): MethodsBuilder => {
  const callBuilder =
    (path: string) =>
    (...params: any) =>
      api.call(path, { body: { ...params } });

  return {
    get: {
      key: "get",
      callBuilder,
    },
    add: {
      key: "add",
      callBuilder,
    },
    update: {
      key: "update",
      callBuilder,
    },
    fields: {
      key: "fields",
      callBuilder,
    },
    search: {
      key: "search",
      callBuilder,
    },
    current: {
      key: "current",
      callBuilder,
    },
  };
};

export const USER_METHODS: MethodBuilder = (api: APIType): MethodsBuilder =>
  CUSTOM_USER_METHODS(api);
