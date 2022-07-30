import {
  APIType,
  GenericObject,
  MethodBuilder,
  MethodsBuilder,
} from "../../api.types";
import { CRUD_METHODS } from "../../api-helpers";
import { COMMENT_SHARED_METHODS } from "../comment-shared-methods/comment-shared-method";

export const CUSTOM_TIMELINE_METHODS: MethodBuilder = (
  api: APIType
): MethodsBuilder => ({
  bindTimelineRecord: {
    key: "bindings.bind",
    callBuilder:
      (path: string) =>
      (fields: GenericObject): Promise<GenericObject> =>
        api.call(path, { body: { fields } }),
  },
  listTimelineRecord: {
    key: "bindings.list",
    callBuilder:
      (path: string) =>
      (fields: GenericObject): Promise<GenericObject> =>
        api.call(path, { body: { fields } }),
  },
  timelineRecordFields: {
    key: "bindings.fields",
    callBuilder: (path: string) => (): Promise<GenericObject> => api.call(path),
  },
  unbindTimelineRecord: {
    key: "bindings.unbind",
    callBuilder:
      (path: string) =>
      (fields: GenericObject): Promise<GenericObject> =>
        api.call(path, { body: { fields } }),
  },
});

export const TIMELINE_METHODS: MethodBuilder = (
  api: APIType
): MethodsBuilder => ({
  ...CRUD_METHODS(api),
  ...CUSTOM_TIMELINE_METHODS(api),
  ...COMMENT_SHARED_METHODS(api),
});
