import { API } from "../api";

const getPath = (method) => `crm.lead.${method}`;

export const getLeads = (apiKey) => {
  return {
    createLead(body) {
      const api = new API({ apiKey, path: getPath("add.json") });
      return api.call({
        body: {
          fields: body,
        },
      });
    },
    getLeadFields(body) {
      const api = new API({ apiKey, path: getPath("delete.json") });
      return api.call({ body });
    },
    removeLead(body) {
      const api = new API({ apiKey, path: getPath("fields.json") });
      return api.call();
    },
    getLeadById(body) {
      const api = new API({ apiKey, path: getPath("get.json") });
      return api.call({ body });
    },
    getLeads(body) {
      const api = new API({ apiKey, path: getPath("list.json") });
      return api.call({ body });
    },
    getLeadProducts(body) {
      const api = new API({ apiKey, path: getPath("productrows.get.json") });
      return api.call({ body });
    },
    createOrUpdateLeadProduct(body) {
      const api = new API({ apiKey, path: getPath("productrows.set.json") });
      return api.call({ body });
    },
    updateLead(body) {
      const api = new API({ apiKey, path: getPath("update.json") });
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
