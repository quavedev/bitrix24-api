import { API } from "../api";

const getPath = (method) => `crm.status.${method}`;

export const getStatus = (endpoint) => {
  return {
    createStatus({ fields }) {
      const api = new API({ endpoint, path: getPath("add.json") });
      return api.call({
        body: {
          fields,
        },
      });
    },
    removeStatus({ id }) {
      const api = new API({ endpoint, path: getPath("delete.json") });
      return api.call({
        body: {
          id,
        },
      });
    },
    getStatus({ entityId }) {
      const api = new API({ endpoint, path: getPath("entity.items.json") });
      return api.call({
        body: {
          entityId,
        },
      });
    },
    getStatusType() {
      const api = new API({ endpoint, path: getPath("entity.types.json") });
      return api.call();
    },
    getStatusFields() {
      const api = new API({ endpoint, path: getPath("fields.json") });
      return api.call();
    },
    getStatusById({ id }) {
      const api = new API({ endpoint, path: getPath("get.json") });
      return api.call({ body: { id } });
    },
    updateStatus({ id, fields }) {
      const api = new API({ endpoint, path: getPath("update.json") });
      return api.call({ body: { id, fields } });
    },
  };
};
