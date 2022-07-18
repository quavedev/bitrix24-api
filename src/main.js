import { getDeals } from "./crm/deals/deals";
import { getLeads } from "./crm/leads/leads";
import { getCategories } from "./crm/category/categories";
import { getStatus } from "./crm/status/status";
import { getContacts } from "./crm/contact/contacts";
import { getProducts } from "./crm/product/products";
import { getCatalogs } from "./crm/catalogs/catalogs";
import { getTimeline } from "./crm/timeline/timeline";
import { getModes } from "./crm/modes/modes";
import { getActivities } from "./crm/adctivities/activities";
import { getFolders } from "./drive/folder/folder";
import { getFiles } from "./drive/files/files";
import { getStorages } from "./drive/storages/storages";
import { getVersions } from "./drive/versions/versions";
import { getTasks } from "./tasks/task/tasks";
import { getCommentItem } from "./tasks/commentItems/commentItems";

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
      catalog: getCatalogs(endpoint),
      timeline: getTimeline(endpoint),
      activity: getActivities(endpoint),
      mode: getModes(endpoint),
    },
    drive: {
      folter: getFolders(endpoint),
      file: getFiles(endpoint),
      storage: getStorages(endpoint),
      version: getVersions(endpoint),
    },
    tasks: {
      task: getTasks(endpoint),
      commentItem: getCommentItem(endpoint),
    },
  };
};
