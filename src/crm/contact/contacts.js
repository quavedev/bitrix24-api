import { API } from "../../api";

const getPath = (method) => `crm.contact.${method}`;

export const getContacts = (endpoint) => {
  return {
    createContact({ fields, params }) {
      const api = new API({ endpoint, path: getPath("add.json") });
      return api.call({
        body: {
          fields,
          ...(params ? params : {}),
        },
      });
    },
    removeContact({ id }) {
      const api = new API({ endpoint, path: getPath("delete.json") });
      return api.call({
        body: {
          id,
        },
      });
    },
    getContactFields() {
      const api = new API({ endpoint, path: getPath("fields.json") });
      return api.call();
    },
    getContactById({ id }) {
      const api = new API({ endpoint, path: getPath("get.json") });
      return api.call({ body: { id } });
    },
    getContacts({ order, filter, select = "*" }) {
      const api = new API({ endpoint, path: getPath("list.json") });
      return api.call({
        body: {
          ...(order ? { order } : {}),
          filter,
          select,
        },
      });
    },
    updateContact({ id, fields, params }) {
      const api = new API({ endpoint, path: getPath("update.json") });
      return api.call({
        body: {
          ...(params ? { params } : {}),
          id,
          fields,
        },
      });
    },
    createCompanyToContact({ id, fields }) {
      const api = new API({ endpoint, path: getPath("company.add.json") });
      return api.call({
        body: {
          id,
          fields,
        },
      });
    },
    removeCompanyFromContact({ id, fields }) {
      const api = new API({ endpoint, path: getPath("company.delete.json") });
      return api.call({
        body: {
          id,
          fields,
        },
      });
    },
  };
};
