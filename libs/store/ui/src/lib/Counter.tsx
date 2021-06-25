// import { useFetchBreedsQuery } from './features/dogs/dogs-api-slice';
import './Counter.module.scss';

import React, {
  useCallback,
  useState
} from 'react';

import { Link } from 'react-router-dom';

import {
  Button,
  MenuItem,
  Select
} from '@material-ui/core';
import {
  amountAdded,
  incremented
} from '@nx-react-express/shared/redux/features/counter/counter-slice';
import {
  useFetchBreedsQuery
} from '@nx-react-express/shared/redux/features/dogs/dogs-api-slice';
import {
  useAppDispatch,
  useAppSelector
} from '@nx-react-express/shared/redux/hooks';

import styles from './Counter.module.scss';

/* eslint-disable-next-line */
export interface CounterProps {}

export function Counter(props: CounterProps) {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  const [numDogs, setNumDogs] = useState(10);
  const { data = [], isFetching } = useFetchBreedsQuery(numDogs);

  const handleClick = useCallback(() => {
    // increment by 1
    // dispatch(incremented());

    // increment by a fixed amount
    dispatch(amountAdded(3));
  }, [dispatch]);

  return (
    <div className={styles.App}>
      <header className={styles['App-header']}>
        <h1>Welcome to Counter!</h1>
        <Button variant="contained" onClick={handleClick}>
          count is: {count}
        </Button>

        <div>
          <p>Dogs to fetch:</p>

          <Select
            labelId="label"
            id="select"
            value={numDogs}
            onChange={(e) => setNumDogs(Number(e.target.value))}
          >
            <MenuItem value="5">5</MenuItem>
            <MenuItem value="10">10</MenuItem>
            <MenuItem value="15">15</MenuItem>
            <MenuItem value="20">20</MenuItem>
          </Select>
        </div>

        <div>
          <p>Dogs being feched from {process.env.DOGS_API_URl}</p>
          <p>Number of dogs fetched: {data.length}</p>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Picture</th>
              </tr>
            </thead>
            <tbody>
              {data.map((breed) => (
                <tr key={breed.id}>
                  <td>{breed.name}</td>
                  <td>
                    <img src={breed.image.url} alt={breed.name} height={250} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </header>
    </div>
  );
}

export default Counter;
