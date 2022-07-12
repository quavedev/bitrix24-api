import axios from "axios";

export class API {
  constructor({ endpoint, path }) {
    this.endpoint = `${endpoint}/${path}`;
  }
  async call({
    body,
    method = "POST",
    headers = {
      "Content-Type": "application/json",
    },
  } = {}) {
    return axios({
      url: this.endpoint,
      method: method,
      ...(body ? { data: JSON.stringify(body) } : {}),
      headers,
    });
  }
}
