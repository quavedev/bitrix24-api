import { CrudDefaultMethodsType, GenericObject } from "../../api.types";

interface ContactCompanyApiType {
  companyAdd(id: string, fields: GenericObject): Promise<Object>;
  companyDelete(id: string, fields: GenericObject): Promise<Object>;
}

export interface ContactApiType
  extends CrudDefaultMethodsType,
    ContactCompanyApiType {}
