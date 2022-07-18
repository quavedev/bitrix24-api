import { API } from "../../api";

const getPath = (method) => `task.commentitem.${method}`;

export const getCommentItem = (endpoint) => {
  return {
    getListOfMethodsOfTaskCommentItem() {
      const api = new API({ endpoint, path: getPath("getmanifest.json") });
      return api.call({ body: [] });
    },
    getTaskComments({ TASKID, FILTER, ORDER }) {
      const api = new API({ endpoint, path: getPath("getlist.json") });
      return api.call({
        body: [TASKID, ORDER, FILTER],
      });
    },
    getTaskCommentById({ TASKID, ITEMID }) {
      const api = new API({ endpoint, path: getPath("get.json") });
      return api.call({
        body: [TASKID, ITEMID],
      });
    },
    createTaskComment({ TASKID, FIELDS }) {
      const api = new API({ endpoint, path: getPath("add.json") });
      return api.call({
        body: [TASKID, FIELDS],
      });
    },
    updateTaskComment({ TASKID, ITEMID, FIELDS }) {
      const api = new API({ endpoint, path: getPath("update.json") });
      return api.call({
        body: [TASKID, ITEMID, FIELDS],
      });
    },
    removeTaskComment({ TASKID, ITEMID }) {
      const api = new API({ endpoint, path: getPath("delete.json") });
      return api.call({
        body: [TASKID, ITEMID],
      });
    },
    isTaskActionAllowed({ TASKID, ITEMID, ACTIONID }) {
      const api = new API({ endpoint, path: getPath("isactionallowed.json") });
      return api.call({
        body: [TASKID, ITEMID, ACTIONID],
      });
    },
  };
};
