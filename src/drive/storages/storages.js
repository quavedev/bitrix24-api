import { API } from "../../api";

const getPath = (method) => `disk.storage.${method}`;

export const getStorages = (endpoint) => {
  return {
    getStorageFields() {
      const api = new API({ endpoint, path: getPath("getfields.json") });
      return api.call();
    },
    createFolderInStorageRoot({ storageId, data }) {
      const api = new API({ endpoint, path: getPath("addfolder.json") });
      return api.call({ body: { id: storageId, data } });
    },
    getStorageById({ storageId }) {
      const api = new API({ endpoint, path: getPath("get.json") });
      return api.call({ body: { id: storageId } });
    },
    getFilesAndFoldersInStorageRoot({ storageId, filter }) {
      const api = new API({ endpoint, path: getPath("getchildren.json") });
      return api.call({ body: { id: storageId, filter } });
    },
    getDescriptionOfAvailableStorage() {
      const api = new API({ endpoint, path: getPath("getforapp.json") });
      return api.call();
    },
    getListOfAvailableStorage({ filter }) {
      const api = new API({ endpoint, path: getPath("getlist.json") });
      return api.call({ body: { filter } });
    },
    getStorageTypes() {
      const api = new API({ endpoint, path: getPath("gettypes.json") });
      return api.call();
    },
    renameStorageById({ storageId, newName }) {
      const api = new API({ endpoint, path: getPath("rename.json") });
      return api.call({ body: { id: storageId, newName } });
    },
    addNewFileToStorageRoot({
      storageId,
      fileContent,
      data,
      generateUniqueName = true,
      rights = [],
    }) {
      const api = new API({ endpoint, path: getPath("uploadfile.json") });
      return api.call({
        body: {
          id: storageId,
          rights,
          fileContent,
          data,
          generateUniqueName,
        },
      });
    },
  };
};
