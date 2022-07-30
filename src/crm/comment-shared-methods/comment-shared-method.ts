import { APIType, GenericObject } from "../../api.types";

export interface CommentSharedMethodApiType {
  getComment(id: string): Promise<object>;
  updateComment(id: string, fields: GenericObject): Promise<object>;
  listComment(): Promise<object>;
  addComment(fields: GenericObject): Promise<object>;
  deleteComment(id: string): Promise<object>;
  commentFields(): Promise<object>;
}

export const COMMENT_SHARED_METHODS = (api: APIType) => ({
  commentAdd: {
    key: "comment.get",
    callBuilder:
      (path: string) =>
      (id: string): Promise<object> =>
        api.call(path, { body: { id } }),
  },
  commentUpdate: {
    key: "comment.update",
    callBuilder:
      (path: string) =>
      (id: string, fields: GenericObject): Promise<object> =>
        api.call(path, { body: { id, fields } }),
  },
  commentList: {
    key: "comment.list",
    callBuilder: (path: string) => (): Promise<object> => api.call(path),
  },
  commentGet: {
    key: "comment.add",
    callBuilder:
      (path: string) =>
      (fields: GenericObject): Promise<object> =>
        api.call(path, { body: { fields } }),
  },
  commentDelete: {
    key: "comment.delete",
    callBuilder:
      (path: string) =>
      (id: string): Promise<object> =>
        api.call(path, { body: { id } }),
  },
  fieldsComment: {
    key: "comment.fields",
    callBuilder: (path: string) => (): Promise<object> => api.call(path),
  },
});
