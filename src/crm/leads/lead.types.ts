import {
  CrudDefaultMethodsType,
} from "../../api.types";
import { ProductSharedMethodApiType } from "../product-shared-methods/product-shared-method";
import { UserfieldSharedApiType } from "../user-shared-methods/user-shared-method";

export interface LeadApiType
  extends CrudDefaultMethodsType,
    ProductSharedMethodApiType,
    UserfieldSharedApiType {}
