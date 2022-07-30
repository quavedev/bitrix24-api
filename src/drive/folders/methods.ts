import { APIType, MethodsBuilder } from "../../api.types";
import { CRUD_METHODS, CRUD_METHODS_DEF } from "../../api-helpers";

export const CUSTOM_FOLDER_METHODS: MethodsBuilder = {
  getFields: {
    key: "getfields",
    callBuilder: CRUD_METHODS_DEF.noParams,
  },
  get: CRUD_METHODS.get,
  rename: {
    key: "rename",
    callBuilder:
      (api: APIType, path: string) =>
      (id: string, newName: string): Promise<object> =>
        api.call(path, { body: { id, newName } }),
  },
  copyTo: {
    key: "copyto",
    callBuilder:
      (api: APIType, path: string) =>
      (id: string, targetFolderId: string): Promise<object> =>
        api.call(path, { body: { id, targetFolderId } }),
  },
  moveTo: {
    key: "moveto",
    callBuilder:
      (api: APIType, path: string) =>
      (id: string, targetFolderId: string): Promise<object> =>
        api.call(path, { body: { id, targetFolderId } }),
  },
  markDeleted: {
    key: "markdeleted",
    callBuilder: CRUD_METHODS_DEF.withIdParam,
  },
  restore: {
    key: "restore",
    callBuilder: CRUD_METHODS_DEF.withIdParam,
  },
  getExternalLink: {
    key: "getExternalLink",
    callBuilder: CRUD_METHODS_DEF.withIdParam,
  },

  getChildren: {
    key: "getchildren",
    callBuilder:
      (api: APIType, path: string) =>
      (id: string, filter: object): Promise<object> =>
        api.call(path, { body: { id, filter } }),
  },
  addSubfolder: {
    key: "addsubfolder",
    callBuilder:
      (api: APIType, path: string) =>
      (id: string, data: object): Promise<object> =>
        api.call(path, { body: { id, data } }),
  },
  deleteTree: {
    key: "deletetree",
    callBuilder: CRUD_METHODS_DEF.withIdParam,
  },
  uploadFile: {
    key: "uploadfile",
    callBuilder:
      (api: APIType, path: string) =>
      (id: string, fileContent: object, data: object): Promise<object> =>
        api.call(path, { body: { id, fileContent, data } }),
  },
};

export const FOLDER_METHODS: MethodsBuilder = CUSTOM_FOLDER_METHODS;
