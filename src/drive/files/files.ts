import { Config } from "../../api.types";
import { FileApiType } from "./file.types";
import { FILE_METHODS } from "./methods";
import { buildApiMethods } from "../../api-helpers";

export const FileAPI = (config: Config): FileApiType => {
  return buildApiMethods(config, "disk.folder", FILE_METHODS) as FileApiType;
};
