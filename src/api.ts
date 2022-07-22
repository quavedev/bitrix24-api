import axios from "axios";
type ApiCrmMethodContexts = "deal" | "lead" | "category" | "status" | "contact" | "product" | "activity" | "timeline" | "settings" | string;

interface CallProps {
  body: {

    [key: string]: string };
  method: "POST" | "GET",
  headers: { [key: string]: string }
}

type Path = `crm.${ApiCrmMethodContexts}.${"add" | "get"}`

export class API {
  public endpoint

  constructor(endpoint: string, path: Path) {
    this.endpoint = `${endpoint}/${path}`;
  }
  async call({
    body,
    method = "POST",
    headers = {
      "Content-Type": "application/json",
    },
  } = {} as Partial<CallProps>) {
    return axios({
      url: this.endpoint,
      method: method,
      ...(body ? { data: JSON.stringify(body) } : {}),
      headers,
    });
  }
}


class CRMLead extends API {
  public endpoint

  constructor(endpoint: string, path: "add" | "get") {
    super(endpoint, `crm.lead.${path}` )
    this.endpoint = `${endpoint}/${path}`;
  }


}

const factoryApproach = (endpoint = "", method: "get" | "add") => {
  const path: Path = `crm.lead.${method}`
  return new API(endpoint, path)
}


const api = new API('1234', "crm.activity.add")

const lead = new CRMLead("sadjfafsd", "get")
lead.call({
  body: {

  }
})
api.call({})


// const compo = new CRMLeadComposed(api)