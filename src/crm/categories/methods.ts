import {
  APIType,
  GenericObject,
  MethodBuilder,
  MethodsBuilder,
} from "../../api.types";

export const CATEGORY_METHODS: MethodBuilder = (
  api: APIType
): MethodsBuilder => {
  const callBuilder =
    (path: string) =>
    (entityTypeId: number, fields: GenericObject): Promise<GenericObject> =>
      api.call(path, { body: { fields } });
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
