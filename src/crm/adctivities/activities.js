import { API } from "../../api";

const getPath = (method) => `crm.activity.${method}`;

export const getActivities = (endpoint) => {
  return {
    createActivity({ fields }) {
      const api = new API({ endpoint, path: getPath("add.json") });
      return api.call({
        body: {
          fields,
        },
      });
    },
    getCurrentActivityCommunicationDetails() {
      const api = new API({
        endpoint,
        path: getPath("communication.fields.json"),
      });
      return api.call();
    },
    removeActivity({ id }) {
      const api = new API({
        endpoint,
        path: getPath("delete.json"),
      });
      return api.call({ body: { id } });
    },
    getActivityFields() {
      const api = new API({
        endpoint,
        path: getPath("list.json"),
      });
      return api.call();
    },
    getActivityById({ id }) {
      const api = new API({
        endpoint,
        path: getPath("get.json"),
      });
      return api.call({ body: { id } });
    },
    getActivities({ select = "*", filter, order }) {
      const api = new API({
        endpoint,
        path: getPath("list.json"),
      });
      return api.call({ body: { select, filter, order } });
    },
    bindActivityToElement({ activityId, entityTypeId, entityId }) {
      const api = new API({
        endpoint,
        path: getPath("binding.add.json"),
      });
      return api.call({ body: { activityId, entityTypeId, entityId } });
    },
    unbindActivityFromElement({ activityId, entityTypeId, entityId }) {
      const api = new API({
        endpoint,
        path: getPath("binding.delete.json"),
      });
      return api.call({ body: { activityId, entityTypeId, entityId } });
    },
    getBindedActivities({ activityId }) {
      const api = new API({
        endpoint,
        path: getPath("binding.list.json"),
      });
      return api.call({ body: { activityId } });
    },
  };
};
