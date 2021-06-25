// import { useFetchBreedsQuery } from './features/dogs/dogs-api-slice';
import './Counter.module.scss';

import React, {
  useCallback,
  useEffect,
  useState
} from 'react';

import {
  Link,
  useHistory,
  useParams,
  useRouteMatch
} from 'react-router-dom';

import {
  Button,
  MenuItem,
  Select
} from '@material-ui/core';
import {
  amountAdded,
  incremented
} from '@nx-react-express/redux/features/counter/counter-slice';
import {
  useAppDispatch,
  useAppSelector
} from '@nx-react-express/redux/hooks';

import styles from './Counter.module.scss';

/* eslint-disable-next-line */
export interface CounterProps {}

export function Counter(props: CounterProps) {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  const handleClick = useCallback(() => {
    // increment by 1
    // dispatch(incremented());

    // increment by a fixed amount
    dispatch(amountAdded(3));
  }, [dispatch]);
  useEffect(() => {
    console.log('counter props:', props);
  });

  return (
    <div className={styles.App}>
      <header className={styles['App-header']}>
        <h1>Welcome to Counter!</h1>
        <Button variant="contained" onClick={handleClick}>
          count is: {count}
        </Button>
      </header>
    </div>
  );
}

export default Counter;
