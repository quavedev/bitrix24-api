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
  commentAdd: {
    key: "comment.get",
    callBuilder:
      (path: string) =>
      (id: string): Promise<Object> =>
        api.call(path, { body: { id } }),
  },
  commentUpdate: {
    key: "comment.update",
    callBuilder:
      (path: string) =>
      (id: string, fields: GenericObject): Promise<Object> =>
        api.call(path, { body: { id, fields } }),
  },
  commentList: {
    key: "comment.list",
    callBuilder: (path: string) => (): Promise<Object> => api.call(path),
  },
  commentGet: {
    key: "comment.add",
    callBuilder:
      (path: string) =>
      (fields: GenericObject): Promise<Object> =>
        api.call(path, { body: { fields } }),
  },
  commentDelete: {
    key: "comment.delete",
    callBuilder:
      (path: string) =>
      (id: string): Promise<Object> =>
        api.call(path, { body: { id } }),
  },
  fieldsComment: {
    key: "comment.fields",
    callBuilder: (path: string) => (): Promise<Object> => api.call(path),
  },
});
