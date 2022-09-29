export interface Config {
  endpoint: string;
  authCode?: string;
  type?: "json" | "xml" | string;
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
  id: number;
  fields: GenericObject;
  params?: GenericObject;
}

export interface APIType {
  call(path: string, params?: CallProps): Promise<any>;
}

export interface MethodsDefBuilder {
  [
    key:
      | "add"
      | "delete"
      | "fields"
      | "get"
      | "list"
      | "update"
      | "noParams"
      | "withFieldsParam"
      | string
  ]: (api: APIType, path: string) => (...params: any) => Promise<GenericObject>;
}
export interface MethodsBuilder {
  [key: string]: {
    key: string;
    callBuilder: (
      api: APIType,
      path: string
    ) => (...params: any) => Promise<GenericObject>;
  };
}

export interface CrudDefaultMethodsType {
  add(fields: GenericObject): Promise<GenericObject>;
  fields(): Promise<GenericObject>;
  delete(id: string): Promise<GenericObject>;
  get(id: string): Promise<GenericObject>;
  list(options: CrudListCallProps): Promise<GenericObject>;
  update(options: CrudUpdateCallProps): Promise<GenericObject>;
}
