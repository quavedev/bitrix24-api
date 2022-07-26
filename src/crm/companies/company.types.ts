import { CrudDefaultMethodsType } from "../../api.types";
import { UserfieldSharedApiType } from "../user-shared-methods/user-shared-method.types";
import { ContactSharedMethodApiType } from "../contact-shared-methods/contact-shared-method";

export interface CompanyApiType
  extends CrudDefaultMethodsType,
    UserfieldSharedApiType,
    ContactSharedMethodApiType {}
