import { GenericObject } from "../../api.types";

interface CustomAppOptionAPIMethods {
  get(name: string, value:string): Promise<GenericObject>;
  set(name: string): Promise<GenericObject>;
}

export interface AppOptionApiType extends CustomAppOptionAPIMethods {}
