import { CrudDefaultMethodsType, GenericObject } from "../../api.types";
import { CommentSharedMethodApiType } from "../comment-shared-methods/comment-shared-method";

interface customTimelineMethods {
  bindTimelineRecord: (fields: GenericObject) => Promise<Object>;
  listTimelineRecord: (fields: GenericObject) => Promise<Object>;
  timelineRecordFields: () => Promise<Object>;
  unbindTimelineRecord: (fields: GenericObject) => Promise<Object>;
}

export interface TimelineApiType
  extends CrudDefaultMethodsType,
    customTimelineMethods,
    CommentSharedMethodApiType {}
