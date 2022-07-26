import { APIType, GenericObject } from "../../api.types";

export interface ContactSharedMethodApiType {
  contactAdd(id: string, fields: GenericObject): Promise<Object>;
  contactDelete(id: string, fields: GenericObject): Promise<Object>;
  contactFields(): Promise<Object>;
  getItemsContact(id: string): Promise<Object>;
  deleteItemsContact(id: string): Promise<Object>;
  setItemsContact(id: string, items: GenericObject): Promise<Object>;
}

export const CONTACT_SHARED_METHODS = (api: APIType) => {
  const callBuilder =
    (path: string) =>
    (...params: any): Promise<Object> =>
      api.call(path, { body: { ...params } });

  return {
    contactAdd: {
      key: "contact.add",
      callBuilder,
    },
    contactDelete: {
      key: "contact.delete",
      callBuilder,
    },
    contactFields: {
      key: "contact.fields",
      callBuilder,
    },
    getItemsContact: {
      key: "contact.items.fields",
      callBuilder,
    },
    deleteItemsContact: {
      key: "contact.items.delete",
      callBuilder,
    },
    setItemsContact: {
      key: "contact.items.set",
      callBuilder,
    },
  };
};
