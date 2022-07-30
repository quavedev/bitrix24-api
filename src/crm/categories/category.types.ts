import { CrudUpdateCallProps, GenericObject } from "../../api.types";

export interface CaregoryApiType {
  add(entityTypeId: number, fields: GenericObject): Promise<GenericObject>;
  fields(): Promise<GenericObject>;
  delete(entityTypeId: number, id: string): Promise<GenericObject>;
  get(entityTypeId: number, id: string): Promise<GenericObject>;
  list(entityTypeId: number): Promise<GenericObject>;
  update(
    entityTypeId: number,
    options: CrudUpdateCallProps
  ): Promise<GenericObject>;
}
