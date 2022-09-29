import { APIType, CallProps, Config } from "./api.types";
import { remoteCall } from "./remoteCall";

export class API implements APIType {
  private readonly _endpoint: string;
  private readonly _type: string;
  private readonly _authCode?: string;

  constructor(config: Config) {
    const { endpoint, type = "json", authCode } = config;
    this._endpoint = endpoint;
    this._type = type;
    this._authCode = authCode;
  }

  async call(path: string, params?: CallProps): Promise<any> {
    const endpointWithPath = `${this._endpoint}/${path}.${this._type}${
      this._authCode ? `?auth=${this._authCode}` : ""
    }`;
    return remoteCall(endpointWithPath, params);
  }
}
