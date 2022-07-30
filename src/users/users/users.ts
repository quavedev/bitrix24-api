import { Config } from "../../api.types";
import { UserApiType } from "./user.types";
import { USER_METHODS } from "./methods";
import { buildApiMethods } from "../../api-helpers";

export const UserAPI = (config: Config): UserApiType =>
  buildApiMethods(config, "user", USER_METHODS) as UserApiType;
