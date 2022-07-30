import { APIType, GenericObject, MethodsBuilder } from "../../api.types";

export interface ContactSharedMethodApiType {
  contactAdd(id: string, fields: GenericObject): Promise<object>;
  contactDelete(id: string, fields: GenericObject): Promise<object>;
  contactFields(): Promise<object>;
  getItemsContact(id: string): Promise<object>;
  deleteItemsContact(id: string): Promise<object>;
  setItemsContact(id: string, items: GenericObject): Promise<object>;
}

export const CONTACT_SHARED_METHODS: MethodsBuilder = {
  contactAdd: {
    key: "contact.add",
    callBuilder:
      (api: APIType, path: string) =>
      (id: string, fields: GenericObject): Promise<object> =>
        api.call(path, { body: { id, fields } }),
  },
  contactDelete: {
    key: "contact.delete",
    callBuilder:
      (api: APIType, path: string) =>
      (id: string, fields: GenericObject): Promise<object> =>
        api.call(path, { body: { id, fields } }),
  },
  contactFields: {
    key: "contact.fields",
    callBuilder: (api: APIType, path: string) => (): Promise<object> =>
      api.call(path),
  },
  getItemsContact: {
    key: "contact.items.fields",
    callBuilder:
      (api: APIType, path: string) =>
      (id: string): Promise<object> =>
        api.call(path, { body: { id } }),
  },
  deleteItemsContact: {
    key: "contact.items.delete",
    callBuilder:
      (api: APIType, path: string) =>
      (id: string): Promise<object> =>
        api.call(path, { body: { id } }),
  },
  setItemsContact: {
    key: "contact.items.set",
    callBuilder:
      (api: APIType, path: string) =>
      (id: string, fields: GenericObject): Promise<object> =>
        api.call(path, { body: { id, fields } }),
  },
};
