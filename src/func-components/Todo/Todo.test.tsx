import React from 'react';
import Todo from './Todo';
import renderForTest from '@/tests/renderForTest';
import { waitFor } from '@testing-library/react';

describe('<Todo />', () => {
  const setup = () => renderForTest(<Todo />);

  it('render List item', async () => {
    const { getByText } = setup();
    waitFor(() => getByText('todo1'));
  });
});
