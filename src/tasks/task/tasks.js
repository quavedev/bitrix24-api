import { API } from "../../api";

const getPath = (method) => `tasks.task.${method}`;

export const getTasks = (endpoint) => {
  return {
    createTask({ fields }) {
      const api = new API({ endpoint, path: getPath("add.json") });
      return api.call({ body: { fields } });
    },
    approveTask({ taskId }) {
      const api = new API({ endpoint, path: getPath("approve.json") });
      return api.call({ body: { taskId } });
    },
    toggleTaskToCompleted({ taskId }) {
      const api = new API({ endpoint, path: getPath("complete.json") });
      return api.call({ body: { taskId } });
    },
    getTotalOfUsersPerTask({ userId, groupId, type }) {
      const api = new API({ endpoint, path: getPath("counters.get.json") });
      return api.call({ body: { userId, groupId, type } });
    },
    togleTaskToDeferred({ taskId }) {
      const api = new API({ endpoint, path: getPath("deger.json") });
      return api.call({ body: { taskId } });
    },
    delegateTaskToUser({ taskId, userId }) {
      const api = new API({ endpoint, path: getPath("delegate.json") });
      return api.call({ body: { taskId, userId } });
    },
    removeTaskById({ taskId }) {
      const api = new API({ endpoint, path: getPath("delete.json") });
      return api.call({ body: { taskId } });
    },
    disapprovesTaskById({ taskId }) {
      const api = new API({ endpoint, path: getPath("disapprove.json") });
      return api.call({ body: { taskId } });
    },
    addTaskToFavourites({ taskId }) {
      const api = new API({ endpoint, path: getPath("favorite.add.json") });
      return api.call({ body: { taskId } });
    },
    removeTaskFromFavourites({ taskId }) {
      const api = new API({ endpoint, path: getPath("favorite.delete.json") });
      return api.call({ body: { taskId } });
    },
    addFileToTask({ taskId, fileId, params }) {
      const api = new API({ endpoint, path: getPath("files.attach.json") });
      return api.call({
        body: { taskId, fileId, ...(params ? { params } : {}) },
      });
    },
    getTaskById({ taskId, select = "*" }) {
      const api = new API({ endpoint, path: getPath("get.json") });
      return api.call({
        body: {
          taskId,
          select,
        },
      });
    },
    getTaskFields() {
      const api = new API({ endpoint, path: getPath("fields.json") });
      return api.call();
    },
    checkIfUsersHasAccessToTheTask({ taskId, users }) {
      const api = new API({ endpoint, path: getPath("getaccess.json") });
      return api.call({
        body: {
          taskId,
          users,
        },
      });
    },
    getTaskHistoryById({ taskId }) {
      const api = new API({ endpoint, path: getPath("history.list.json") });
      return api.call({
        body: {
          taskId,
        },
      });
    },
    getTasks({ order, filter, select = "*" }) {
      const api = new API({ endpoint, path: getPath("list.json") });
      return api.call({
        body: {
          order,
          filter,
          select,
        },
      });
    },
    pauseTaskAndSwitchItToPending({ taskId }) {
      const api = new API({ endpoint, path: getPath("pause.json") });
      return api.call({
        body: {
          taskId,
        },
      });
    },
    restartTask({ taskId }) {
      const api = new API({ endpoint, path: getPath("renew.json") });
      return api.call({
        body: {
          taskId,
        },
      });
    },
    startTask({ taskId }) {
      const api = new API({ endpoint, path: getPath("start.json") });
      return api.call({
        body: {
          taskId,
        },
      });
    },
    monitoringTask({ taskId }) {
      const api = new API({ endpoint, path: getPath("startwatch.json") });
      return api.call({
        body: {
          taskId,
        },
      });
    },
    stopMonitoringTask({ taskId }) {
      const api = new API({ endpoint, path: getPath("stopwatch.json") });
      return api.call({
        body: {
          taskId,
        },
      });
    },
    updateTaskById({ taskId, fields }) {
      const api = new API({ endpoint, path: getPath("update.json") });
      return api.call({
        body: {
          taskId,
          fields,
        },
      });
    },
  };
};
