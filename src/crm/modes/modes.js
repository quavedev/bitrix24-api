import { API } from "../../api";

const getPath = (method) => `crm.settings.${method}`;

export const getModes = (endpoint) => {
  return {
    getCRMSettings() {
      const api = new API({ endpoint, path: getPath("mode.get.json") });
      return api.call();
    },
  };
};
