import axios from "axios";

export class API {
  constructor({ apiKey, path }) {
    this.apiKey = `https://b24-1qpg2h.bitrix24.com.br/rest/8/${apiKey}/${path}`;
  }
  async call({
    body,
    method = "POST",
    headers = {
      "Content-Type": "application/json",
    },
  } = {}) {
    return axios({
      url: this.apiKey,
      method: method,
      ...(body ? { data: JSON.stringify(body) } : {}),
      headers,
    });
  }
}
