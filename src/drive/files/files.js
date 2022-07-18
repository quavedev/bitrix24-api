import { API } from "../../api";

const getPath = (method) => `disk.file.${method}`;

export const getFiles = (endpoint) => {
  return {
    getFileFields() {
      const api = new API({ endpoint, path: getPath("getfields.json") });
      return api.call();
    },
    getFileById({ fileId }) {
      const api = new API({ endpoint, path: getPath("get.json") });
      return api.call({ body: { id: fileId } });
    },
    renameFileById({ fileId, newName }) {
      const api = new API({ endpoint, path: getPath("rename.json") });
      return api.call({ body: { id: fileId, newName } });
    },
    copyFileToFolder({ fileId, targetFolderId }) {
      const api = new API({ endpoint, path: getPath("copyto.json") });
      return api.call({ body: { id: fileId, targetFolderId } });
    },
    moveFileToFolder({ fileId, targetFolderId }) {
      const api = new API({ endpoint, path: getPath("moveto.json") });
      return api.call({ body: { id: fileId, targetFolderId } });
    },
    removeFile({ fileId }) {
      const api = new API({ endpoint, path: getPath("delete.json") });
      return api.call({ body: { id: fileId } });
    },
    moveFileToTrash({ fileId }) {
      const api = new API({ endpoint, path: getPath("markdeleted.json") });
      return api.call({ body: { id: fileId } });
    },
    restoreFileFromTrash({ fileId }) {
      const api = new API({ endpoint, path: getPath("restore.json") });
      return api.call({ body: { id: fileId } });
    },
    createNewFileVersion({ fileId, fileContent }) {
      const api = new API({ endpoint, path: getPath("uploadversion.json") });
      return api.call({
        body: {
          id: fileId,
          fileContent,
        },
      });
    },
    restoreFileToSpecificVersion({ fileId, versionId }) {
      const api = new API({
        endpoint,
        path: getPath("restoreFromVersion.json"),
      });
      return api.call({
        body: {
          id: fileId,
          versionId,
        },
      });
    },
    getFileVersions({ fileId, filter }) {
      const api = new API({
        endpoint,
        path: getPath("getVersions.json"),
      });
      return api.call({
        body: {
          id: fileId,
          filter,
        },
      });
    },
    getPublicFileLink({ fileId }) {
      const api = new API({ endpoint, path: getPath("getExternalLink.json") });
      return api.call({ body: { id: fileId } });
    },
  };
};
