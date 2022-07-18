import { API } from "../../api";

const getPath = (method) => `crm.deal.${method}`;

export const getDeals = (endpoint) => {
  return {
    createDeal(body) {
      const api = new API({ endpoint, path: getPath("add.json") });
      return api.call({ body: { fields: body } });
    },
    removeDeal(body) {
      const api = new API({ endpoint, path: getPath("delete.json") });
      return api.call({ body });
    },
    getDealFields() {
      const api = new API({ endpoint, path: getPath("fields.json") });
      return api.call();
    },
    getDealById(body) {
      const api = new API({ endpoint, path: getPath("get.json") });
      return api.call({ body });
    },
    getDeals(body) {
      const api = new API({ endpoint, path: getPath("list.json") });
      return api.call({ body });
    },
    getDealProducts(body) {
      const api = new API({ endpoint, path: getPath("productrows.get.json") });
      return api.call({ body });
    },
    createOrUpdateDealProducts({ body }) {
      const api = new API({ endpoint, path: getPath("productrows.set.json") });
      return api.call({ body });
    },
    updateDeal(body) {
      const api = new API({ endpoint, path: getPath("update.json") });
      return api.call({ body: { id: body.id, fields: body } });
    },
  };
};
