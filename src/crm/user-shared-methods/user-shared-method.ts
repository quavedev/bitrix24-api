import {
  APIType,
  GenericObject,
  MethodBuilder,
  MethodsBuilder,
} from "../../api.types";

export const USER_SHARED_METHODS: MethodBuilder = (
  api: APIType
): MethodsBuilder => ({
  userfieldAdd: {
    key: "userfield.add",
    callBuilder:
      (path: string) =>
      (fields: GenericObject): Promise<object> =>
        api.call(path, { body: { fields } }),
  },
  userfieldDelete: {
    key: "userfield.delete",
    callBuilder:
      (path: string) =>
      (id: string): Promise<object> =>
        api.call(path, { body: { id } }),
  },
  userfieldGet: {
    key: "userfield.Get",
    callBuilder:
      (path: string) =>
      (id: string): Promise<object> =>
        api.call(path, { body: { id } }),
  },
  userfieldList: {
    key: "userfield.list",
    callBuilder:
      (path: string) =>
      (order: GenericObject, filter: GenericObject): Promise<object> =>
        api.call(path, { body: { order, filter } }),
  },
  userfieldUpdate: {
    key: "userfield.update",
    callBuilder:
      (path: string) =>
      (id: string, fields: GenericObject): Promise<object> =>
        api.call(path, { body: { id, fields } }),
  },
});
