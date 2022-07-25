import { APIType, GenericObject } from "../../api.types";

export interface CommentSharedMethodApiType {
  getComment(id: string): Promise<Object>;
  updateComment(id: string, fields: GenericObject): Promise<Object>;
  listComment(): Promise<Object>;
  addComment(fields: GenericObject): Promise<Object>;
  deleteComment(id: string): Promise<Object>;
  commentFields(): Promise<Object>;
}

export const COMMENT_SHARED_METHODS = (api: APIType) => ({
  addComment: {
    key: "comment.get",
    callBuilder:
      (path: string) =>
      (id: string): Promise<Object> =>
        api.call(path, { body: { id } }),
  },
  updateComment: {
    key: "comment.update",
    callBuilder:
      (path: string) =>
      (id: string, fields: GenericObject): Promise<Object> =>
        api.call(path, { body: { id, fields } }),
  },
  listComment: {
    key: "comment.list",
    callBuilder: (path: string) => (): Promise<Object> => api.call(path),
  },
  getComment: {
    key: "comment.add",
    callBuilder:
      (path: string) =>
      (fields: GenericObject): Promise<Object> =>
        api.call(path, { body: { fields } }),
  },
  deleteComment: {
    key: "comment.delete",
    callBuilder:
      (path: string) =>
      (id: string): Promise<Object> =>
        api.call(path, { body: { id } }),
  },
  commentFields: {
    key: "comment.fields",
    callBuilder: (path: string) => (): Promise<Object> => api.call(path),
  },
});
