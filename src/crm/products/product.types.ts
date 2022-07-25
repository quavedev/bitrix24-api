import { CrudDefaultMethodsType, GenericObject } from "../../api.types";

interface ProductPropertyApiType {
  propertyAdd: (fields: GenericObject) => Promise<Object>;
  propertyDelete(id: string): Promise<Object>;
  propertyEnumerationFields(): Promise<Object>;
  propertyFields(): Promise<Object>;
  propertyGet(id: string): Promise<Object>;
  propertyList(order: GenericObject, filter: GenericObject): Promise<Object>;
  propertySettingsFields(
    propertyType: string,
    userType: string
  ): Promise<Object>;
  propertyTypes(): Promise<Object>;
  propertyUpdate(id: string, fields: GenericObject): Promise<Object>;
}

export interface ProductApiType
  extends CrudDefaultMethodsType,
    ProductPropertyApiType {}
