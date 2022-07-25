import { APIType, MethodBuilder, MethodsBuilder } from "../../api.types";

export const CUSTOM_FOLDER_METHODS: MethodBuilder = (
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
    getChildren: {
      key: "getchildren",
      callBuilder,
    },
    addSubfolder: {
      key: "addsubfolder",
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
    rename: {
      key: "rename",
      callBuilder,
    },
    deleteTree: {
      key: "deletetree",
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
    getExternalLink: {
      key: "getExternalLink",
      callBuilder,
    },
    uploadFile: {
      key: "uploadfile",
      callBuilder,
    },
  };
};

export const FOLDER_METHODS: MethodBuilder = (api: APIType): MethodsBuilder =>
  CUSTOM_FOLDER_METHODS(api);
