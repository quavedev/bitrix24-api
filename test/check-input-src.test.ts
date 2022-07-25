// @ts-ignore
import { checkFieldsInputParams, checkGetInputParams } from "./testHelpers";
import { DealAPI } from "../src";

const config = { endpoint: "http://localhost:5080" };

describe("Source test", () => {
  const dealApi = DealAPI(config);
  it("Test: checkGetInputParams", checkGetInputParams(config, dealApi));
  it("Test: checkFieldsInputParams", checkFieldsInputParams(config, dealApi));
});
