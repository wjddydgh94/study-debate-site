import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootStateType } from '@/redux/reducers';
import { Button, Grid, Switch } from '@material-ui/core';
import { changePersistAction } from '../src/redux/reducers/persist';

function PersistExam() {
  const dispatch = useDispatch();
  const isPersist = useSelector(
    (state: RootStateType) => state.persist.isPersist,
  );

  const handleChangePersist = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => {
      dispatch(changePersistAction(checked));
    },
    [dispatch],
  );

  const handleRefresh = useCallback(() => {
    window.location.reload();
  }, []);

  return (
    <React.Fragment>
      <Grid container spacing={0}>
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
          <Switch
            checked={isPersist}
            onChange={handleChangePersist}
            name="checkedA"
            inputProps={{ 'aria-label': 'secondary checkbox' }}
          />
          <Button
            type="button"
            variant="contained"
            color="default"
            style={{ width: '10%' }}
            onClick={handleRefresh}
          >
            refresh
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default PersistExam;
