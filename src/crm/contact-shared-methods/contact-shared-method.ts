import { APIType, GenericObject } from "../../api.types";

export interface ContactSharedMethodApiType {
  contactAdd(id: string, fields: GenericObject): Promise<object>;
  contactDelete(id: string, fields: GenericObject): Promise<object>;
  contactFields(): Promise<object>;
  getItemsContact(id: string): Promise<object>;
  deleteItemsContact(id: string): Promise<object>;
  setItemsContact(id: string, items: GenericObject): Promise<object>;
}

export const CONTACT_SHARED_METHODS = (api: APIType) => {
  const callBuilder =
    (path: string) =>
    (...params: any): Promise<object> =>
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
