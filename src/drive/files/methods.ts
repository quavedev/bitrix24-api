import { APIType, MethodBuilder, MethodsBuilder } from "../../api.types";

export const CUSTOM_FILE_METHODS: MethodBuilder = (
  api: APIType
): MethodsBuilder => {
  const callBuilder =
    (path: string) =>
    (...params: any) =>
      api.call(path, { body: { ...params } });
  return {
    getFields: {
      key: "getfields",
      callBuilder,
    },
    get: {
      key: "get",
      callBuilder,
    },
    rename: {
      key: "rename",
      callBuilder,
    },
    copyTo: {
      key: "copyto",
      callBuilder,
    },
    moveTo: {
      key: "moveto",
      callBuilder,
    },
    delete: {
      key: "delete",
      callBuilder,
    },
    markDeleted: {
      key: "markdeleted",
      callBuilder,
    },
    restore: {
      key: "restore",
      callBuilder,
    },
    uploadVersion: {
      key: "uploadversion",
      callBuilder,
    },
    restoreFromVersion: {
      key: "restoreFromVersion",
      callBuilder,
    },
    getVersions: {
      key: "getVersions",
      callBuilder,
    },
    getExternalLink: {
      key: "getExternalLink",
      callBuilder,
    },
  };
};

export const FILE_METHODS: MethodBuilder = (api: APIType): MethodsBuilder =>
  CUSTOM_FILE_METHODS(api);
