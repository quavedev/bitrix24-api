import { Config } from "../../api.types";
import { TimelineApiType } from "./timeline.types";
import { TIMELINE_METHODS } from "./methods";
import { buildApiMethods } from "../../api-helpers";

export const TimelineAPI = (config: Config): TimelineApiType => {
  return buildApiMethods(
    config,
    "crm.timeline",
    TIMELINE_METHODS
  ) as TimelineApiType;
};
