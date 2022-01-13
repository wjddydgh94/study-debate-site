import React from 'react';
import Todo from '@/func-components/Todo';
import Head from 'next/head';

function TodoPage() {
  return (
    <>
      <Head>
        <title>todo</title>
      </Head>
      <Todo />
    </>
  );
}

export default TodoPage;
