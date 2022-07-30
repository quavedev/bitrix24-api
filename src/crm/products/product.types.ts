import { CrudDefaultMethodsType, GenericObject } from "../../api.types";

interface ProductPropertyApiType {
  propertyAdd: (fields: GenericObject) => Promise<object>;
  propertyDelete(id: string): Promise<object>;
  propertyEnumerationFields(): Promise<object>;
  propertyFields(): Promise<object>;
  propertyGet(id: string): Promise<object>;
  propertyList(order: GenericObject, filter: GenericObject): Promise<object>;
  propertySettingsFields(
    propertyType: string,
    userType: string
  ): Promise<object>;
  propertyTypes(): Promise<object>;
  propertyUpdate(id: string, fields: GenericObject): Promise<object>;
}

export interface ProductApiType
  extends CrudDefaultMethodsType,
    ProductPropertyApiType {}
