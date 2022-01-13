import { ActionType, createAction } from 'typesafe-actions';
import produce from 'immer';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export const actionTypes = {
  CHANGE_PERSIST: 'persist/CHANGE_PERSIST',
};

export const changePersistAction = createAction(
  actionTypes.CHANGE_PERSIST,
)<boolean>();

const actions = { changePersistAction };

export type PersistAction = ActionType<typeof actions>;

export interface PersistStateType {
  isPersist: boolean;
}

export const initialState: PersistStateType = {
  isPersist: false,
};

const PersistReducer = persistReducer(
  {
    storage,
    key: 'sample-persist',
    whitelist: ['isPersist'],
  },
  (state: PersistStateType = initialState, action: PersistAction) =>
    produce(state, (draft) => {
      switch (action.type) {
        case actionTypes.CHANGE_PERSIST:
          draft.isPersist = action.payload;
          break;
        default:
          break;
      }
    }),
);

export default PersistReducer;
