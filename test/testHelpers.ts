import { Config } from "../src/api.types";
import { DealApiType } from "../src/crm/deals/deal.types";

export const checkGetInputParams =
  (config: Config, dealAPI: DealApiType) => async () => {
    const { endpoint, method, body } = await dealAPI.get("9999");
    expect(endpoint).toEqual(`${config.endpoint}/crm.deal.get.json`);
    expect(method).toEqual("POST");
    expect(body).toEqual({ id: "9999" });
  };

export const checkFieldsInputParams =
  (config: Config, dealAPI: DealApiType) => async () => {
    const { endpoint, method, body } = await dealAPI.fields();
    expect(endpoint).toEqual(`${config.endpoint}/crm.deal.fields.json`);
    expect(method).toEqual("POST");
    expect(body).toBeUndefined();
  };
