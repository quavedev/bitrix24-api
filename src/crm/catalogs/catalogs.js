import { API } from "../../api";

const getPath = (method) => `crm.catalog.${method}`;

export const getCatalogs = (endpoint) => {
  return {
    getCatalogById({ id }) {
      const api = new API({ endpoint, path: getPath("get.json") });
      return api.call({
        body: {
          id,
        },
      });
    },
    getCatalogFields() {
      const api = new API({ endpoint, path: getPath("fields.json") });
      return api.call();
    },
    getCatalog() {
      const api = new API({ endpoint, path: getPath("list.json") });
      return api.call();
    },
  };
};
