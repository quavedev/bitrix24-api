export interface Config {
  endpoint: string;
}

export interface GenericObject<T = any> {
  [key: string]: T;
}

export interface CallProps {
  body?: GenericObject;
  method?: "POST" | "GET";
  headers?: GenericObject<string>;
}

export interface CrudListCallProps {
  order?: GenericObject;
  filter?: GenericObject;
  select?: string[];
}

export interface CrudUpdateCallProps {
  id: string;
  fields: GenericObject;
  params?: GenericObject;
}

export interface APIType {
  call(path: string, params?: CallProps): Promise<any>;
}

export type methodAdd = (fields: GenericObject) => Promise<GenericObject>;
export type methodDelete = (id: string) => Promise<GenericObject>;
export type methodFields = () => Promise<GenericObject>;
export type methodGet = (id: string) => Promise<GenericObject>;
export type methodList = (options: CrudListCallProps) => Promise<GenericObject>;
export type methodUpdate = (options: CrudUpdateCallProps) => Promise<GenericObject>;

export interface CrudDefaultMethodsType {
  add: methodAdd;
  fields: methodFields;
  delete: methodDelete;
  get: methodGet;
  list: methodList;
  update: methodUpdate;
}
