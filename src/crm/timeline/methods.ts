import { APIType, GenericObject, MethodsBuilder } from "../../api.types";
import { CRUD_METHODS } from "../../api-helpers";
import { COMMENT_SHARED_METHODS } from "../comment-shared-methods/comment-shared-method";

export const CUSTOM_TIMELINE_METHODS: MethodsBuilder = {
  bindTimelineRecord: {
    key: "bindings.bind",
    callBuilder:
      (api: APIType, path: string) =>
      (fields: GenericObject): Promise<GenericObject> =>
        api.call(path, { body: { fields } }),
  },
  listTimelineRecord: {
    key: "bindings.list",
    callBuilder:
      (api: APIType, path: string) =>
      (fields: GenericObject): Promise<GenericObject> =>
        api.call(path, { body: { fields } }),
  },
  timelineRecordFields: {
    key: "bindings.fields",
    callBuilder: (api: APIType, path: string) => (): Promise<GenericObject> =>
      api.call(path),
  },
  unbindTimelineRecord: {
    key: "bindings.unbind",
    callBuilder:
      (api: APIType, path: string) =>
      (fields: GenericObject): Promise<GenericObject> =>
        api.call(path, { body: { fields } }),
  },
};

export const TIMELINE_METHODS: MethodsBuilder = {
  ...CRUD_METHODS,
  ...CUSTOM_TIMELINE_METHODS,
  ...COMMENT_SHARED_METHODS,
};
