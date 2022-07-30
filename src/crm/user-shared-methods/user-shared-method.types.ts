import {
  GenericObject,
} from "../../api.types";

export interface UserfieldSharedApiType {
  userfieldAdd(fields: GenericObject): Promise<object>;
  userfieldDelete(id: string): Promise<object>;
  userfieldGet(id: string): Promise<object>;
  userfieldList(order: GenericObject, filter: GenericObject): Promise<object>;
  userfieldUpdate(id: string, fields: GenericObject): Promise<object>;
}

