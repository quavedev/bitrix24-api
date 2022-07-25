import { APIType, CallProps, Config } from "./api.types";
import { remoteCall } from "./remoteCall";

export class API implements APIType {
  private readonly _endpoint: string;
  private readonly _type: string;

  constructor(config: Config) {
    const { endpoint, type = "json" } = config;
    this._endpoint = endpoint;
    this._type = type;
  }

  async call(path: string, params?: CallProps): Promise<any> {
    const endpointWithPath = `${this._endpoint}/${path}.${this._type}`;
    return remoteCall(endpointWithPath, params);
  }
}
