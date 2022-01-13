import React from 'react';
import { Grid, Paper } from '@material-ui/core';
import TodoItem, { TodoItemType } from '@/func-components/Todo/TodoItem';

export interface TodoListPropsType {
  list: TodoItemType[];
}

function TodoList({ list }: TodoListPropsType) {
  return (
    <Grid container>
      {list.map((item, index) => {
        return <TodoItem key={index} {...item} />;
      })}
    </Grid>
  );
}

export default TodoList;
