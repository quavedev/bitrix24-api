import { Config } from "../../api.types";
import { StorageApiType } from "./storage.types";
import { STORAGE_METHODS } from "./methods";
import { buildApiMethods } from "../../api-helpers";

export const StorageAPI = (config: Config): StorageApiType => {
  return buildApiMethods(
    config,
    "disk.storage",
    STORAGE_METHODS
  ) as StorageApiType;
};
