import {
  GenericObject,
} from "../../api.types";

export interface UserfieldSharedApiType {
  userfieldAdd(fields: GenericObject): Promise<Object>;
  userfieldDelete(id: string): Promise<Object>;
  userfieldGet(id: string): Promise<Object>;
  userfieldList(order: GenericObject, filter: GenericObject): Promise<Object>;
  userfieldUpdate(id: string, fields: GenericObject): Promise<Object>;
}

