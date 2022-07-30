import { APIType, MethodsBuilder } from "../../api.types";
import { CRUD_METHODS_DEF, CRUD_METHODS } from "../../api-helpers";

export const CUSTOM_FILE_METHODS: MethodsBuilder = {
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
  delete: CRUD_METHODS.delete,
  markDeleted: {
    key: "markdeleted",
    callBuilder: CRUD_METHODS_DEF.withIdParam,
  },
  restore: {
    key: "restore",
    callBuilder: CRUD_METHODS_DEF.withIdParam,
  },
  uploadVersion: {
    key: "uploadversion",
    callBuilder:
      (api: APIType, path: string) =>
      (id: string, fileContent: object): Promise<object> =>
        api.call(path, { body: { id, fileContent } }),
  },
  restoreFromVersion: {
    key: "restoreFromVersion",
    callBuilder:
      (api: APIType, path: string) =>
      (id: string, versionId: string): Promise<object> =>
        api.call(path, { body: { id, versionId } }),
  },
  getVersions: {
    key: "getVersions",
    callBuilder:
      (api: APIType, path: string) =>
      (id: string, filter: object): Promise<object> =>
        api.call(path, { body: { id, filter } }),
  },
  getExternalLink: {
    key: "getExternalLink",
    callBuilder: CRUD_METHODS_DEF.withIdParam,
  },
};

export const FILE_METHODS: MethodsBuilder = CUSTOM_FILE_METHODS;
