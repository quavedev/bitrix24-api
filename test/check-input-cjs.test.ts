// @ts-ignore
import { checkFieldsInputParams, checkGetInputParams } from "./testHelpers";
import { DealAPI } from "../dist/crm";

const config = { endpoint: "http://localhost:5080" };

describe("CommonJS build test", () => {
  const dealApi = DealAPI(config);
  it("Test: checkGetInputParams", checkGetInputParams(config, dealApi));
  it("Test: checkFieldsInputParams", checkFieldsInputParams(config, dealApi));
});
