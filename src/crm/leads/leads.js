import { API } from "../../api";

const getPath = (method) => `crm.lead.${method}`;

export const getLeads = (endpoint) => {
  return {
    createLead({ fields, params }) {
      const api = new API({ endpoint, path: getPath("add.json") });
      return api.call({
        body: {
          fields,
          ...(params ? params : {}),
        },
      });
    },
    getLeadFields(body) {
      const api = new API({ endpoint, path: getPath("delete.json") });
      return api.call({ body });
    },
    removeLead(body) {
      const api = new API({ endpoint, path: getPath("fields.json") });
      return api.call();
    },
    getLeadById(body) {
      const api = new API({ endpoint, path: getPath("get.json") });
      return api.call({ body });
    },
    getLeads(body) {
      const api = new API({ endpoint, path: getPath("list.json") });
      return api.call({ body });
    },
    getLeadProducts(body) {
      const api = new API({ endpoint, path: getPath("productrows.get.json") });
      return api.call({ body });
    },
    createOrUpdateLeadProduct({ id, rows = [] }) {
      const api = new API({ endpoint, path: getPath("productrows.set.json") });
      return api.call({ body: { id, rows } });
    },
    updateLead({ id, fields }) {
      const api = new API({ endpoint, path: getPath("update.json") });
      return api.call({
        body: {
          id,
          fields,
        },
      });
    },
  };
};
