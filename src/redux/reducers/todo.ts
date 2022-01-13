import { ActionType, createAsyncAction } from 'typesafe-actions';
import produce from 'immer';
import { defaultInstance } from '../../api/config';

export const actionTypes = {
  REGISTER_TODO_REQUEST: 'todo/REGISTER_TODO_REQUEST',
  REGISTER_TODO_SUCCESS: 'todo/REGISTER_TODO_SUCCESS',
  REGISTER_TODO_FAILURE: 'todo/REGISTER_TODO_FAILURE',
  REGISTER_TODO_CANCEL: 'todo/REGISTER_TODO_CANCEL',
};

export const registerTodoAction = createAsyncAction(
  actionTypes.REGISTER_TODO_REQUEST,
  actionTypes.REGISTER_TODO_SUCCESS,
  actionTypes.REGISTER_TODO_FAILURE,
  actionTypes.REGISTER_TODO_CANCEL,
)<any, any, any, any>();

const actions = {
  registerTodoAction,
};

export type TodoAction = ActionType<typeof actions>;

export interface TodoStateType {
  registerTodoLoading: boolean;
  registerTodoResponse: {
    statusCode: number;
    status?: string;
    message?: string;
    data?: any;
  };
}

export const initialState: TodoStateType = {
  registerTodoLoading: false,
  registerTodoResponse: {
    statusCode: -1,
    message: '',
  },
};

const TodoReducer = (state: TodoStateType = initialState, action: TodoAction) =>
  produce(state, (draft) => {
    switch (action.type) {
      case actionTypes.REGISTER_TODO_REQUEST:
        draft.registerTodoLoading = true;
        draft.registerTodoResponse = { statusCode: -1, message: '' };
        break;
      case actionTypes.REGISTER_TODO_SUCCESS:
        draft.registerTodoLoading = false;
        draft.registerTodoResponse = {
          ...action.payload,
        };
        break;
      case actionTypes.REGISTER_TODO_FAILURE:
        draft.registerTodoLoading = false;
        draft.registerTodoResponse = {
          ...action.payload,
        };
        break;
      case actionTypes.REGISTER_TODO_CANCEL:
        draft.registerTodoLoading = false;
        draft.registerTodoResponse = { statusCode: -1, message: '' };
        break;
      default:
        break;
    }
  });

export default TodoReducer;
