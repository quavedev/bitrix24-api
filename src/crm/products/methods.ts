import { APIType, GenericObject, MethodsBuilder } from "../../api.types";
import { CRUD_METHODS } from "../../api-helpers";

const PROPERTY_METHODS: MethodsBuilder = {
  propertyAdd: {
    key: "property.add",
    callBuilder:
      (api: APIType, path: string) =>
      (fields: GenericObject): Promise<object> =>
        api.call(path, { body: { fields } }),
  },
  propertyDelete: {
    key: "property.delete",
    callBuilder:
      (api: APIType, path: string) =>
      (id: string): Promise<object> =>
        api.call(path, { body: { id } }),
  },
  propertyEnumerationFields: {
    key: "property.enumeration.fields",
    callBuilder: (api: APIType, path: string) => (): Promise<object> =>
      api.call(path),
  },
  propertyFields: {
    key: "property.fields",
    callBuilder: (api: APIType, path: string) => (): Promise<object> =>
      api.call(path),
  },
  propertyGet: {
    key: "property.Get",
    callBuilder:
      (api: APIType, path: string) =>
      (id: string): Promise<object> =>
        api.call(path, { body: { id } }),
  },
  propertyList: {
    key: "property.list",
    callBuilder:
      (api: APIType, path: string) =>
      (order: GenericObject, filter: GenericObject): Promise<object> =>
        api.call(path, { body: { order, filter } }),
  },
  propertySettingsFields: {
    key: "property.settings.fields",
    callBuilder:
      (api: APIType, path: string) =>
      (propertyType: string, userType: string): Promise<object> =>
        api.call(path, { body: { propertyType, userType } }),
  },
  propertyTypes: {
    key: "property.types",
    callBuilder: (api: APIType, path: string) => (): Promise<object> =>
      api.call(path),
  },
  propertyUpdate: {
    key: "property.update",
    callBuilder:
      (api: APIType, path: string) =>
      (id: string, fields: GenericObject): Promise<object> =>
        api.call(path, { body: { id, fields } }),
  },
};

export const PRODUCT_METHODS: MethodsBuilder = {
  ...CRUD_METHODS,
  ...PROPERTY_METHODS,
};
