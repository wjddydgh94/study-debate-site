import {
  persistSyncAction,
  PersistSyncStateType,
} from '@/redux/reducers/storage';
import React, { useCallback, useMemo } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { RootStateType } from '@/redux/reducers';

function usePersistSync() {
  const dispatch = useDispatch();
  const persistSyncState = useSelector(
    ({ storage }: RootStateType) => storage.persistSyncState,
    shallowEqual,
  );

  const handlePersistSyncState = useCallback(
    (state: PersistSyncStateType) => {
      dispatch(persistSyncAction(state));
    },
    [dispatch],
  );

  const isSyncDone = useMemo(() => {
    return persistSyncState === 'DONE';
  }, [persistSyncState]);

  return { persistSyncState, handlePersistSyncState, isSyncDone };
}

export default usePersistSync;
