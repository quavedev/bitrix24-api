import axios from "axios";
import { APIType, CallProps, Config } from "./api.types";

export class API implements APIType {
  private readonly _endpoint: string;

  constructor(config: Config) {
    this._endpoint = config.endpoint;
  }

  async call(path: string, params?: CallProps): Promise<any> {
    const {
      body,
      method = "POST",
      headers = {
        "Content-Type": "application/json",
      },
    } = params || {};
    return axios({
      url: this._endpoint,
      method: method,
      ...(body ? { data: JSON.stringify(body) } : {}),
      headers,
    });
  }
}
