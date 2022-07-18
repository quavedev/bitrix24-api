import { API } from "../../api";

const getPath = (method) => `disk.folder.${method}`;

export const getFolders = (endpoint) => {
  return {
    getFileFields() {
      const api = new API({ endpoint, path: getPath("getfields.json") });
      return api.call();
    },
    getFolderById({ id }) {
      const api = new API({ endpoint, path: getPath("get.json") });
      return api.call({ body: { id } });
    },
    getFilesAndFoldersStoredInFolder({ id, filter }) {
      const api = new API({ endpoint, path: getPath("getchildren.json") });
      return api.call({ body: { id, filter } });
    },
    createSubfolder({ subfolderId, data }) {
      const api = new API({ endpoint, path: getPath("addsubfolder.json") });
      return api.call({ body: { id: subfolderId, data } });
    },
    copyFolderIntoAnotherFolder({ originFolderId, targetFolderId }) {
      const api = new API({ endpoint, path: getPath("copyto.json") });
      return api.call({ body: { id: originFolderId, targetFolderId } });
    },
    moveFolderIntoAnotherFolder({ originFolderId, targetFolderId }) {
      const api = new API({ endpoint, path: getPath("moveto.json") });
      return api.call({ body: { id: originFolderId, targetFolderId } });
    },
    renameFolderById({ folderId, newName }) {
      const api = new API({ endpoint, path: getPath("rename.json") });
      return api.call({ body: { id: folderId, newName } });
    },
    removeFolderAndAllSubdirectories({ folderId }) {
      const api = new API({ endpoint, path: getPath("deletetree.json") });
      return api.call({ body: { id: folderId } });
    },
    moveFolderToTrash({ folderId }) {
      const api = new API({ endpoint, path: getPath("markdeleted.json") });
      return api.call({ body: { id: folderId } });
    },
    restoreFolderFromTrash({ folderId }) {
      const api = new API({ endpoint, path: getPath("restore.json") });
      return api.call({ body: { id: folderId } });
    },
    getPublicFolderLink({ folderId }) {
      const api = new API({ endpoint, path: getPath("getExternalLink.json") });
      return api.call({ body: { id: folderId } });
    },
    addNewFileToFolder({
      folderId,
      fileContent,
      data,
      generateUniqueName = true,
      rights,
    }) {
      const api = new API({ endpoint, path: getPath("uploadfile.json") });
      return api.call({
        body: {
          id: folderId,
          fileContent,
          data,
          generateUniqueName,
          ...(rights ? { rights } : {}),
        },
      });
    },
  };
};
