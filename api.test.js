import { LeadAPI } from "./dist/es/crm/leads";
import { ProductAPI } from "./dist/es/crm/products";
import { DealAPI } from "./dist/es/crm/deals";

const config = { endpoint: "test" };

describe("test ", function () {
  DealAPI(config);
  LeadAPI(config).;
  LeadAPI(config).add({ ab: "acc" });
  ProductAPI(config);
});
