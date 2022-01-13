import { ActionType, createAction } from 'typesafe-actions';
import produce from 'immer';

export const actionTypes = {
  PERSIST_SYNC: 'storage/PERSIST_SYNC',
};

export const persistSyncAction = createAction(
  actionTypes.PERSIST_SYNC,
)<PersistSyncStateType>();

const actions = {
  persistSyncAction,
};

export type StorageAction = ActionType<typeof actions>;

export type PersistSyncStateType = 'LOADING' | 'DONE' | 'INIT';

export interface StorageStateType {
  persistSyncState: PersistSyncStateType;
}

export const initialState: StorageStateType = {
  persistSyncState: 'INIT',
};

const StorageReducer = (
  state: StorageStateType = initialState,
  action: StorageAction,
) =>
  produce(state, (draft) => {
    switch (action.type) {
      case actionTypes.PERSIST_SYNC:
        draft.persistSyncState = action.payload;
        break;
      default:
        break;
    }
  });

export default StorageReducer;
