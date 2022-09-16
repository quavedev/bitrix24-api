import { SocialNetworkGroups } from "./socialNetworkGroups.types";
import { SOCIAL_NETWORL_GROUPS } from "./methods";
import { Config } from "../api.types";
import { buildApiMethods } from "../api-helpers";

export const SocialNetworkGroupsAPI = (config: Config): SocialNetworkGroups =>
  buildApiMethods(
    config,
    "socialnetwork.api.workgroup",
    SOCIAL_NETWORL_GROUPS
  ) as SocialNetworkGroups;
