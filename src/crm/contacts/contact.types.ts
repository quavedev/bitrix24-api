import { CrudDefaultMethodsType, GenericObject } from "../../api.types";

interface ContactCompanyApiType {
  companyAdd(id: string, fields: GenericObject): Promise<object>;
  companyDelete(id: string, fields: GenericObject): Promise<object>;
}

export interface ContactApiType
  extends CrudDefaultMethodsType,
    ContactCompanyApiType {}
