import { CrudUpdateCallProps, GenericObject } from "../../api.types";

interface CustomUserAPIMethods {
  add(fields: GenericObject): Promise<GenericObject>;
  update(options: CrudUpdateCallProps): Promise<GenericObject>;
  get(id?: string): Promise<GenericObject>;
  fields(): Promise<GenericObject>;
  search(fields: GenericObject): Promise<GenericObject>;
  current(): Promise<GenericObject>;
}

export interface UserApiType extends CustomUserAPIMethods {}
