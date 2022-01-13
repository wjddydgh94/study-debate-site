import React, { useCallback, useMemo, useRef } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import useSWR, { mutate } from 'swr';
import _ from 'lodash';
import { callApi, defaultInstance } from '@/api';
import setupAxiosMockAdapter from '@/tests/setupAxiosMockAdapter';
import { todoList } from '@fixtures/todo';
import { RootStateType } from '@/redux/reducers';
import { registerTodoAction } from '@/redux/reducers/todo';

const getKey = '/api/tests/todos';
setupAxiosMockAdapter(defaultInstance)
  .onGet(getKey)
  .replyOnce(200, {
    status: '완료',
    statusCode: 200,
    message: '',
    data: {
      list: todoList,
    },
  });

const swrFetcher = (url: string) =>
  callApi({
    method: 'GET',
    url,
  }).then((res) => res.data);

function useTodo() {
  const dispatch = useDispatch();
  const registerTodoResponse = useSelector(
    (state: RootStateType) => state.todo.registerTodoResponse,
    shallowEqual,
  );
  const inputRef = useRef<HTMLInputElement>();
  const { data } = useSWR(getKey, swrFetcher, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  const handleSubmit = useCallback(() => {
    if (inputRef?.current?.value !== '')
      dispatch(registerTodoAction.request(inputRef?.current?.value));
  }, [dispatch]);

  const afterRegisterTodo = useCallback(() => {
    if (registerTodoResponse.statusCode === 200) {
      const cloneData = _.cloneDeep(data);
      cloneData.data.list = [
        ...cloneData.data.list,
        {
          text: inputRef?.current?.value,
        },
      ];

      mutate(
        getKey,
        {
          ...cloneData,
        },
        false,
      );
    }
  }, [data, registerTodoResponse.statusCode]);

  const todoList = useMemo(() => {
    if (_.isEmpty(data) || _.isEmpty(data.data)) {
      return [];
    } else {
      return data.data.list || [];
    }
  }, [data]);

  return {
    todoList,
    afterRegisterTodo,
    registerTodoResponse,
    handleSubmit,
    inputRef,
  };
}

export default useTodo;
