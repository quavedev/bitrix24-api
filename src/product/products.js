import { API } from "../api";

const getPath = (method) => `crm.product.${method}`;

export const getProducts = (endpoint) => {
  return {
    createProduct({ fields }) {
      const api = new API({ endpoint, path: getPath("add.json") });
      return api.call({
        body: {
          fields,
        },
      });
    },
    removeProduct({ id }) {
      const api = new API({ endpoint, path: getPath("delete.json") });
      return api.call({
        body: {
          id,
        },
      });
    },
    getProductFields() {
      const api = new API({ endpoint, path: getPath("fields.json") });
      return api.call();
    },
    getProductById({ id }) {
      const api = new API({ endpoint, path: getPath("get.json") });
      return api.call({ body: { id } });
    },
    getProducts({ order, filter, select = "*" }) {
      const api = new API({ endpoint, path: getPath("list.json") });
      return api.call({ body: { order, filter, select } });
    },
    createProductProperty({ fields }) {
      const api = new API({ endpoint, path: getPath("property.add.json") });
      return api.call({ body: { fields } });
    },
    removeProductProperty({ id }) {
      const api = new API({ endpoint, path: getPath("property.delete.json") });
      return api.call({ body: { id } });
    },
    getProductPropertyFields() {
      const api = new API({
        endpoint,
        path: getPath("property.fields.json"),
      });
      return api.call();
    },
    getProductPropertyById({ id }) {
      const api = new API({
        endpoint,
        path: getPath("property.get.json"),
      });
      return api.call({ body: { id } });
    },
    getProductProperties({ order, filter }) {
      const api = new API({
        endpoint,
        path: getPath("property.list.json"),
      });
      return api.call({
        body: {
          order,
          filter,
        },
      });
    },
    getProductPropertyForAdditionalSettingsFromUserTypes({
      propertyType,
      userType,
    }) {
      const api = new API({
        endpoint,
        path: getPath("property.settings.fields.json"),
      });
      return api.call({
        body: {
          propertyType,
          userType,
        },
      });
    },
    getProductPropertyTypes() {
      const api = new API({ endpoint, path: getPath("property.types.json") });
      return api.call();
    },
    updateProductProperty({ id, fields }) {
      const api = new API({ endpoint, path: getPath("property.update.json") });
      return api.call({ body: { id, fields } });
    },
    updateProduct({ id, fields }) {
      const api = new API({ endpoint, path: getPath("update.json") });
      return api.call({ body: { id, fields } });
    },
  };
};
