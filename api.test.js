import { LeadAPI } from "./dist/es/crm/leads";

describe("test ", function () {
  LeadAPI({ endpoint: "test" }).get("12");
  LeadAPI({ endpoint: "test" }).add({ ab: "acc" });
});
