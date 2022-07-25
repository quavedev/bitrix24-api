import axios from "axios";
import { CallProps } from "./api.types";

export const remoteCall = (
  endpointWithPath: string,
  params?: CallProps
): Promise<any> => {
  const {
    body,
    method = "POST",
    headers = {
      "Content-Type": "application/json",
    },
  } = params || {};
  return axios({
    url: endpointWithPath,
    method: method,
    ...(body ? { data: JSON.stringify(body) } : {}),
    headers,
  });
};
