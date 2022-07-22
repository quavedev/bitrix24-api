type Obj<T = any> = {
  [key: string]: T;
};

declare enum RestMethodsEnum {
  GET = "GET",
  POST = "POST",
  DELETE ="DELETE",
  PUT = "PUT",
  PATCH ="PATCH",
  OPTIONS ="OPTIONS"
}


interface APIConstructor {
  endpoint: string;
  path: string;
}

interface CallParams {
  body: Obj;
  headers?: Obj<string>
  method?: RestMethodsEnum
}

export declare class API {
  constructor(params: APIConstructor);

  call(param: CallParams): any
}

