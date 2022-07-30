import { APIType, GenericObject, MethodsBuilder } from "../../api.types";

export const USER_SHARED_METHODS: MethodsBuilder = {
  userfieldAdd: {
    key: "userfield.add",
    callBuilder:
      (api: APIType, path: string) =>
      (fields: GenericObject): Promise<object> =>
        api.call(path, { body: { fields } }),
  },
  userfieldDelete: {
    key: "userfield.delete",
    callBuilder:
      (api: APIType, path: string) =>
      (id: string): Promise<object> =>
        api.call(path, { body: { id } }),
  },
  userfieldGet: {
    key: "userfield.Get",
    callBuilder:
      (api: APIType, path: string) =>
      (id: string): Promise<object> =>
        api.call(path, { body: { id } }),
  },
  userfieldList: {
    key: "userfield.list",
    callBuilder:
      (api: APIType, path: string) =>
      (order: GenericObject, filter: GenericObject): Promise<object> =>
        api.call(path, { body: { order, filter } }),
  },
  userfieldUpdate: {
    key: "userfield.update",
    callBuilder:
      (api: APIType, path: string) =>
      (id: string, fields: GenericObject): Promise<object> =>
        api.call(path, { body: { id, fields } }),
  },
};
