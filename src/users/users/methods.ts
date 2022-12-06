import { MethodsBuilder } from "../../api.types";
import { CRUD_METHODS, CRUD_METHODS_DEF } from "../../api-helpers";

const { add, get, update, fields, getWithBodyParams } = CRUD_METHODS;
const { noParams, withFieldsParam } = CRUD_METHODS_DEF;
export const USER_METHODS: MethodsBuilder = {
  get,
  add,
  update,
  fields,
  getWithBodyParams,
  search: {
    key: "search",
    callBuilder: withFieldsParam,
  },
  current: {
    key: "current",
    callBuilder: noParams,
  },
};
