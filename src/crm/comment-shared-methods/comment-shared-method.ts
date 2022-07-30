import { APIType, GenericObject, MethodsBuilder } from "../../api.types";

export interface CommentSharedMethodApiType {
  getComment(id: string): Promise<object>;
  updateComment(id: string, fields: GenericObject): Promise<object>;
  listComment(): Promise<object>;
  addComment(fields: GenericObject): Promise<object>;
  deleteComment(id: string): Promise<object>;
  commentFields(): Promise<object>;
}

export const COMMENT_SHARED_METHODS: MethodsBuilder = {
  commentAdd: {
    key: "comment.get",
    callBuilder:
      (api: APIType, path: string) =>
      (id: string): Promise<object> =>
        api.call(path, { body: { id } }),
  },
  commentUpdate: {
    key: "comment.update",
    callBuilder:
      (api: APIType, path: string) =>
      (id: string, fields: GenericObject): Promise<object> =>
        api.call(path, { body: { id, fields } }),
  },
  commentList: {
    key: "comment.list",
    callBuilder: (api: APIType, path: string) => (): Promise<object> =>
      api.call(path),
  },
  commentGet: {
    key: "comment.add",
    callBuilder:
      (api: APIType, path: string) =>
      (fields: GenericObject): Promise<object> =>
        api.call(path, { body: { fields } }),
  },
  commentDelete: {
    key: "comment.delete",
    callBuilder:
      (api: APIType, path: string) =>
      (id: string): Promise<object> =>
        api.call(path, { body: { id } }),
  },
  fieldsComment: {
    key: "comment.fields",
    callBuilder: (api: APIType, path: string) => (): Promise<object> =>
      api.call(path),
  },
};
