import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { makeStore } from '@/redux/store';

export default (component: React.ReactElement) => {
  const store = makeStore();
  const utils = render(
    <>
      <Provider store={store}>{component}</Provider>
    </>,
  );
  return {
    ...utils,
    store,
  };
};
