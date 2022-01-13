import todo, { initialState, registerTodoAction } from './todo';

describe('todo recuder', () => {
  it('register success task', () => {
    const state = todo(
      initialState,
      registerTodoAction.success({ statusCode: 200 }),
    );

    expect(state.registerTodoResponse.statusCode).toBe(200);
  });
});
