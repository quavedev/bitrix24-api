import { APIType, MethodsBuilder } from "../api.types";

export const SOCIAL_NETWORL_GROUPS: MethodsBuilder = {
  groups: {
    key: "list",
    callBuilder:
      (api: APIType, path: string) =>
      (filter?: any, select?: any): Promise<object> =>
        api.call(path, { body: { filter, select } }),
  },
};
