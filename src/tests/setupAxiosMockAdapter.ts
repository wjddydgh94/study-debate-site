import { AxiosInstance } from 'axios';

import MockAdapter from 'axios-mock-adapter';

const setupAxiosMockAdapter = (instance: AxiosInstance) => {
  const mock = new MockAdapter(instance, { delayResponse: 300 });
  return mock;
};

export default setupAxiosMockAdapter;
