import { getDeals } from "./deals/deals";
import { getLeads } from "./leads/leads";
import { getCategories } from "./category/categories";
import { getStatus } from "./status/status";
import { getContacts } from "./contact/contacts";
import { getProducts } from "./product/products";

export const Bitrix24 = ({ endpoint: _endpoint }) => {
  if (!_endpoint) {
    throw new Error("The endpoint is required");
  }
  if (typeof _endpoint !== "string") {
    throw new Error(`The endpoint is not a string. Is a a ${typeof _endpoint}`);
  }
  const endpoint = _endpoint.endsWith("/")
    ? _endpoint.substring(0, _endpoint.length - 1)
    : _endpoint;

  return {
    crm: {
      deals: getDeals(endpoint),
      leads: getLeads(endpoint),
      category: getCategories(endpoint),
      status: getStatus(endpoint),
      contact: getContacts(endpoint),
      product: getProducts(endpoint),
    },
  };
};
