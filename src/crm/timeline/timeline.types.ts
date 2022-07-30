import { CrudDefaultMethodsType, GenericObject } from "../../api.types";
import { CommentSharedMethodApiType } from "../comment-shared-methods/comment-shared-method";

interface customTimelineMethods {
  bindTimelineRecord: (fields: GenericObject) => Promise<object>;
  listTimelineRecord: (fields: GenericObject) => Promise<object>;
  timelineRecordFields: () => Promise<object>;
  unbindTimelineRecord: (fields: GenericObject) => Promise<object>;
}

export interface TimelineApiType
  extends CrudDefaultMethodsType,
    customTimelineMethods,
    CommentSharedMethodApiType {}
