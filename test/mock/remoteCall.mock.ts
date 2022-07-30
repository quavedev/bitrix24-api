import { CallProps } from "../../src/api.types";

export const remoteCall = (
  endpoint: string,
  params?: CallProps
): Promise<any> => {
  const {
    body,
    method = "POST",
    headers = {
      "Content-Type": "application/json",
    },
  } = params || {};
  return new Promise((resolve) => resolve({ endpoint, body, method }));
};
