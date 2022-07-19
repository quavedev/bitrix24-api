import { API } from "./api";

const callMethod =
  ({ path, endpoint }) =>
  ({ body }) => {
    const api = new API({ endpoint, path });
    return api.call({ body });
  };

export function generateAPIMethods({ path, methods, endpoint }) {
  return methods.reduce(
    (acc, { method, name }) => ({
      ...acc,
      [name]: callMethod({ endpoint, path: `${path}${method}` }),
    }),
    {}
  );
}

