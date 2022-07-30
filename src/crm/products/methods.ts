import { APIType, GenericObject } from "../../api.types";
import { CRUD_METHODS } from "../../api-helpers";

const PROPERTY_METHODS = (api: APIType) => ({
  propertyAdd: {
    key: "property.add",
    callBuilder:
      (path: string) =>
      (fields: GenericObject): Promise<object> =>
        api.call(path, { body: { fields } }),
  },
  propertyDelete: {
    key: "property.delete",
    callBuilder:
      (path: string) =>
      (id: string): Promise<object> =>
        api.call(path, { body: { id } }),
  },
  propertyEnumerationFields: {
    key: "property.enumeration.fields",
    callBuilder: (path: string) => (): Promise<object> => api.call(path),
  },
  propertyFields: {
    key: "property.fields",
    callBuilder: (path: string) => (): Promise<object> => api.call(path),
  },
  propertyGet: {
    key: "property.Get",
    callBuilder:
      (path: string) =>
      (id: string): Promise<object> =>
        api.call(path, { body: { id } }),
  },
  propertyList: {
    key: "property.list",
    callBuilder:
      (path: string) =>
      (order: GenericObject, filter: GenericObject): Promise<object> =>
        api.call(path, { body: { order, filter } }),
  },
  propertySettingsFields: {
    key: "property.settings.fields",
    callBuilder:
      (path: string) =>
      (propertyType: string, userType: string): Promise<object> =>
        api.call(path, { body: { propertyType, userType } }),
  },
  propertyTypes: {
    key: "property.types",
    callBuilder: (path: string) => (): Promise<object> => api.call(path),
  },
  propertyUpdate: {
    key: "property.update",
    callBuilder:
      (path: string) =>
      (id: string, fields: GenericObject): Promise<object> =>
        api.call(path, { body: { id, fields } }),
  },
});

export const PRODUCT_METHODS = (api: APIType) => ({
  ...CRUD_METHODS(api),
  ...PROPERTY_METHODS(api),
});
