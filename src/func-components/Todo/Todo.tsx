import React, { useEffect } from 'react';
import { Grid } from '@material-ui/core';
import _ from 'lodash';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import useTodo from './hooks/useTodo';

function Todo() {
  const {
    todoList,
    afterRegisterTodo,
    registerTodoResponse,
    handleSubmit,
    inputRef,
  } = useTodo();
  useEffect(() => {
    afterRegisterTodo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [registerTodoResponse]);

  return (
    <React.Fragment>
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <TodoForm
            handleSubmit={handleSubmit}
            inputRef={(el) => (inputRef.current = el as HTMLInputElement)}
          />
        </Grid>
        <Grid
          item
          xs={12}
          style={{
            padding: 20,
            margin: 'auto',
            textAlign: 'center',
            width: 500,
          }}
        >
          <TodoList list={todoList} />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default Todo;
