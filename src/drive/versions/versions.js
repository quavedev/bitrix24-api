import { API } from "../../api";

const getPath = (method) => `disk.version.${method}`;

export const getVersions = (endpoint) => {
  return {
    getVersionById({ versionId }) {
      const api = new API({ endpoint, path: getPath("get.json") });
      return api.call({ body: { id: versionId } });
    },
  };
};
