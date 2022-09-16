import { APIType, MethodsBuilder } from "../../api.types";

export const CUSTOM_APP_OPTION_METHODS: MethodsBuilder = {
  set: {
    key: "set",
    callBuilder:
      (api: APIType, path: string) =>
      (name: string, value: string): Promise<object> =>
        api.call(path, { body: { name, value } }),
  },
  get: {
    key: "get",
    callBuilder:
      (api: APIType, path: string) =>
      (name: string): Promise<object> =>
        api.call(path, { body: { name } }),
  },
};

export const APP_OPTION_METHODS: MethodsBuilder = CUSTOM_APP_OPTION_METHODS;
