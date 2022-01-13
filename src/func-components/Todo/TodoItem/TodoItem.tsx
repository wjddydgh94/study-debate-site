import { Grid, Paper } from '@material-ui/core';
import React from 'react';

export interface TodoItemType {
  text: string;
}

export interface TodoItemPropsType extends TodoItemType {}

function TodoItem({ text }: TodoItemPropsType) {
  return (
    <Grid xs={12} item>
      <Paper
        elevation={2}
        style={{
          margin: 'auto',
          padding: 10,
          display: 'flex',
          alignItems: 'center',
          marginTop: 10,
          width: 500,
        }}
      >
        <span>{text}</span>
      </Paper>
    </Grid>
  );
}

export default TodoItem;
