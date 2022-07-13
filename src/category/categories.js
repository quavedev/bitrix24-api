import { API } from "../api";

const getPath = (method) => `crm.category.${method}`;

export const getCategories = (endpoint) => {
  return {
    createCategory({ entityTypeId, fields }) {
      const api = new API({ endpoint, path: getPath("add.json") });
      return api.call({
        body: {
          fields,
          entityTypeId,
        },
      });
    },
    removeCategory({ entityTypeId, id }) {
      const api = new API({ endpoint, path: getPath("delete.json") });
      return api.call({
        body: {
          id,
          entityTypeId,
        },
      });
    },
    getCategoryFields({ entityTypeId }) {
      const api = new API({ endpoint, path: getPath("fields.json") });
      return api.call({
        body: {
          entityTypeId,
        },
      });
    },
    getCategoryById({ entityTypeId, id }) {
      const api = new API({ endpoint, path: getPath("get.json") });
      return api.call({
        body: {
          entityTypeId,
          id,
        },
      });
    },
    getCategories({ entityTypeId }) {
      const api = new API({ endpoint, path: getPath("list.json") });
      return api.call({
        body: {
          entityTypeId,
        },
      });
    },
    updateCategory({ entityTypeId, id, fields }) {
      const api = new API({ endpoint, path: getPath("update.json") });
      return api.call({
        body: {
          entityTypeId,
          id,
          fields,
        },
      });
    },
  };
};
