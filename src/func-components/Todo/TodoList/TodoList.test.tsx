import React from 'react';
import renderForTest from '@/tests/renderForTest';
import TodoList from './TodoList';
import { todoList } from '@fixtures/todo';

describe('<TodoList />', () => {
  const setup = () => renderForTest(<TodoList list={todoList} />);

  it('list item render', () => {
    const { getByText } = setup();
    getByText('todo1');
  });
});
