import { Bitrix24 } from "../main";

test("Should create a lead", async () => {
  const bitrix24 = Bitrix24({ apiKey: "" });

  const names = [
    "Tamara",
    "Fernando",
    "Edimar",
    "Cariani",
    "Balestrim",
    "Julio",
    "Nayara",
    "Dionisio",
    "Vania",
    "Bob",
  ];

  const ramdomNumber = () => Math.floor(Math.random() * 100);
  const ramdomTitle = () => names[Math.floor(Math.random() * 10)];

  const body = {
    fields: {
      TITLE: `${ramdomTitle()} ${ramdomNumber()}`,
      NAME: `Lead criado randomicamente. ${ramdomNumber()}`,
      SECOND_NAME: "A.",
      LAST_NAME: "Nibot",
      STATUS_ID: "NEW",
      OPENED: "Y",
      ASSIGNED_BY_ID: 1,
      CURRENCY_ID: "USD",
      OPPORTUNITY: 12500,
      PHONE: [{ VALUE: "555888", VALUE_TYPE: "WORK" }],
      WEB: [{ VALUE: "www.mysite.com", VALUE_TYPE: "WORK" }],
    },
  };
  let response = {};
  try {
    response = await bitrix24.crm.leads.createLead({ body });
    console.log("response: ", response);
  } catch (error) {
    console.error(error);
  }

  expect(response.data.result).toBeGreaterThan(0);
});

test("Should get a lead", async () => {
  const bitrix24 = Bitrix24({ apiKey: "" });

  let response = {};

  try {
    response = await bitrix24.crm.leads.getLeads({ id: 4 });
    console.log("response: ", response);
  } catch (error) {
    console.error(error);
  }

  expect(response.data.result.length).toBeGreaterThan(0);
});

test.only("Should update a lead", async () => {
  const bitrix24 = Bitrix24({ apiKey: "" });

  let response = {};

  try {
    response = await bitrix24.crm.leads.updateLead({
      id: 4,
      title: "Lead atualizado.",
    });
    console.log("response: ", response);
  } catch (error) {
    console.error(error);
  }

  expect(response.data.result).toBe(true);
});
