import React from 'react';
import { Button, Input, Paper } from '@material-ui/core';

export interface TodoFormPropsType {
  handleSubmit: () => void;
  inputRef: React.Ref<HTMLInputElement>;
}

function TodoForm({ handleSubmit, inputRef }: TodoFormPropsType) {
  return (
    <Paper
      style={{
        padding: 20,
        margin: 'auto',
        textAlign: 'center',
        width: 500,
      }}
    >
      <form
        style={{ display: 'flex' }}
        onSubmit={(e) => {
          handleSubmit();
          e.preventDefault();
        }}
      >
        <Input
          placeholder="Todo"
          inputProps={{
            'aria-label': 'Description',
          }}
          inputRef={inputRef}
          style={{ width: '90%' }}
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          style={{ width: '10%' }}
        >
          Add
        </Button>
      </form>
    </Paper>
  );
}

export default TodoForm;
