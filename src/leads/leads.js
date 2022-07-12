import { API } from "../api";

const getPath = (method) => `crm.lead.${method}`;

export const getLeads = (endpoint) => {
  return {
    createLead(body) {
      const api = new API({ endpoint, path: getPath("add.json") });
      return api.call({
        body: {
          fields: body,
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
    createOrUpdateLeadProduct(body) {
      const api = new API({ endpoint, path: getPath("productrows.set.json") });
      return api.call({ body });
    },
    updateLead(body) {
      const api = new API({ endpoint, path: getPath("update.json") });
      const { id } = body;
      return api.call({
        body: {
          id,
          fields: body,
        },
      });
    },
  };
};
