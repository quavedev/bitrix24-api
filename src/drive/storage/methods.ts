import { APIType, MethodsBuilder } from "../../api.types";
import { CRUD_METHODS, CRUD_METHODS_DEF } from "../../api-helpers";

export const CUSTOM_STORAGE_METHODS: MethodsBuilder = {
  get: CRUD_METHODS.get,
  getFields: {
    key: "getfields",
    callBuilder: CRUD_METHODS_DEF.noParams,
  },
  rename: {
    key: "rename",
    callBuilder:
      (api: APIType, path: string) =>
      (id: string, newName: string): Promise<object> =>
        api.call(path, { body: { id, newName } }),
  },
  getList: {
    key: "getlist",
    callBuilder:
      (api: APIType, path: string) =>
      (filter: object): Promise<object> =>
        api.call(path, { body: { filter } }),
  },
  getTypes: {
    key: "gettypes",
    callBuilder: CRUD_METHODS_DEF.noParams,
  },
  addFolder: {
    key: "addfolder",
    callBuilder:
      (api: APIType, path: string) =>
      (id: string, data: object): Promise<object> =>
        api.call(path, { body: { id, data } }),
  },
  getChildren: {
    key: "getchildren",
    callBuilder:
      (api: APIType, path: string) =>
      (id: string, filter: object): Promise<object> =>
        api.call(path, { body: { id, filter } }),
  },
  uploadFile: {
    key: "uploadfile",
    callBuilder:
      (api: APIType, path: string) =>
      (
        id: string,
        fileContent: object,
        data: object,
        generateUniqueName?: boolean,
        rights?: object
      ): Promise<object> =>
        api.call(path, {
          body: { id, fileContent, data, generateUniqueName, rights },
        }),
  },
  getForApp: {
    key: "getforapp",
    callBuilder: CRUD_METHODS_DEF.noParams,
  },
};

export const STORAGE_METHODS: MethodsBuilder = CUSTOM_STORAGE_METHODS;
