import { Config } from "../../api.types";
import { FolderApiType } from "./folder.types";
import { FOLDER_METHODS } from "./methods";
import { buildApiMethods } from "../../api-helpers";

export const FolderAPI = (config: Config): FolderApiType => {
  return buildApiMethods(
    config,
    "disk.folder",
    FOLDER_METHODS
  ) as FolderApiType;
};
