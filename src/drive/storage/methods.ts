import { APIType, MethodBuilder, MethodsBuilder } from "../../api.types";

export const CUSTOM_STORAGE_METHODS: MethodBuilder = (
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
    getFields: {
      key: "getfields",
      callBuilder,
    },
    rename: {
      key: "rename",
      callBuilder,
    },
    getList: {
      key: "getlist",
      callBuilder,
    },
    getTypes: {
      key: "gettypes",
      callBuilder,
    },
    addFolder: {
      key: "addfolder",
      callBuilder,
    },
    getChildren: {
      key: "getchildren",
      callBuilder,
    },
    uploadFile: {
      key: "uploadfile",
      callBuilder,
    },
    getForApp: {
      key: "getforapp",
      callBuilder,
    },
  };
};

export const STORAGE_METHODS: MethodBuilder = (api: APIType): MethodsBuilder =>
  CUSTOM_STORAGE_METHODS(api);
