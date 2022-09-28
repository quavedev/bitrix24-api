import { Config } from "../api.types";
import { TasksApiType } from "./contact.types";
import { TASKS_METHODS } from "./methods";
import { buildApiMethods } from "../api-helpers";

export const TasksAPI = (config: Config): TasksApiType =>
  buildApiMethods(config, "tasks.task", TASKS_METHODS) as TasksApiType;
