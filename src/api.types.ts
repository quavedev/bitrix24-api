export interface Config {
  endpoint: string;
}

export interface GenericObject {
  [key: string]: Object;
}

export interface CallProps {
  body?: GenericObject;
  method?: "POST" | "GET";
  headers?: { [key: string]: string };
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

export type methodAdd = (fields: Object) => Promise<Object>;
export type methodDelete = (id: string) => Promise<Object>;
export type methodFields = () => Promise<Object>;
export type methodGet = (id: string) => Promise<Object>;
export type methodList = (options: CrudListCallProps) => Promise<Object>;
export type methodUpdate = (options: CrudUpdateCallProps) => Promise<Object>;

export interface CrudDefaultMethodsType {
  add: methodAdd;
  fields: methodFields;
  delete: methodDelete;
  get: methodGet;
  list: methodList;
  update: methodUpdate;
}
