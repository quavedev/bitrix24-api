import { API } from "../../api";

const getPath = (method) => `crm.timeline.${method}`;

export const getTimeline = (endpoint) => {
  return {
    bindTimelineToElement({ fields }) {
      const api = new API({ endpoint, path: getPath("bindings.bind.json") });
      return api.call({
        body: {
          fields,
        },
      });
    },
    getBindedTimelineFromElement({ fields }) {
      const api = new API({ endpoint, path: getPath("bindings.fields.json") });
      return api.call({
        body: {
          fields,
        },
      });
    },
    getBindedTimeline({ fields }) {
      const api = new API({ endpoint, path: getPath("bindings.list.json") });
      return api.call({
        body: {
          fields,
        },
      });
    },
    unbindTimelineFromElement({ fields }) {
      const api = new API({ endpoint, path: getPath("bindings.unbind.json") });
      return api.call({
        body: {
          fields,
        },
      });
    },
    addNewCommentIntoTimeline({ fields }) {
      const api = new API({ endpoint, path: getPath("comment.add.json") });
      return api.call({
        body: {
          fields,
        },
      });
    },
    removeCommentFromTimeline({ id }) {
      const api = new API({ endpoint, path: getPath("comment.delete.json") });
      return api.call({
        body: {
          id,
        },
      });
    },
    getTimelineCommentsFields() {
      const api = new API({ endpoint, path: getPath("comment.fields.json") });
      return api.call();
    },
    getCommentBYId({ id }) {
      const api = new API({ endpoint, path: getPath("comment.get.json") });
      return api.call({ body: { id } });
    },
    getComments({ filter, select = "*" }) {
      const api = new API({ endpoint, path: getPath("comment.list.json") });
      return api.call({ body: { filter, select } });
    },
    updateComment({ id, comment }) {
      const api = new API({ endpoint, path: getPath("comment.update.json") });
      return api.call({
        body: {
          id,
          fields: {
            COMMENT: comment,
          },
        },
      });
    },
  };
};
