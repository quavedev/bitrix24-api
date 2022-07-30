import { Config } from "../../api.types";
import { ContactApiType } from "./contact.types";
import { CONTACT_METHODS } from "./methods";
import { buildApiMethods } from "../../api-helpers";

export const ContactAPI = (config: Config): ContactApiType =>
  buildApiMethods(config, "crm.contact", CONTACT_METHODS) as ContactApiType;
