import React from 'react';
import renderForTest from '@/tests/renderForTest';
import { fireEvent } from '@testing-library/react';
import TodoForm from './TodoForm';

describe('<TodoForm />', () => {
  const handleSubmit = jest.fn();

  const setup = () => {
    return renderForTest(
      <TodoForm handleSubmit={handleSubmit} inputRef={(el) => {}} />,
    );
  };
  it('Input Todo Text', () => {
    const { getByPlaceholderText } = setup();

    const todoInput = getByPlaceholderText('Todo') as HTMLInputElement;

    fireEvent.change(todoInput, {
      target: {
        value: '테스트2',
      },
    });

    expect(todoInput.value).toBe('테스트2');
  });

  it('Click submit button', () => {
    const { getByText } = setup();

    const addButton = getByText('Add') as HTMLButtonElement;

    fireEvent.click(addButton);

    expect(handleSubmit).toBeCalled();
  });
});
