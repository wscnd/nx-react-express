import './Dogs.module.scss';

import React, {
  useCallback,
  useEffect,
  useState
} from 'react';

import { useHistory } from 'react-router-dom';

import {
  MenuItem,
  Select
} from '@material-ui/core';
import {
  useFetchBreedsQuery
} from '@nx-react-express/redux/features/dogs/dogs-api-slice';

import styles from './Dogs.module.scss';

/* eslint-disable-next-line */
export interface DogsProps {
  query: string | null;
}

export function Dogs(props: DogsProps) {
  const history = useHistory();

  const [numDogs, setNumDogs] = useState(
    Number(props.query) > 20 ? 20 : Number(props.query) || 10 // NOTE: ugly but works
  );
  const { data = [], isFetching } = useFetchBreedsQuery(numDogs);

  const handleMenuClick = useCallback(
    (
      e: React.ChangeEvent<{
        name?: string | undefined;
        value: unknown;
      }>
    ) => {
      const dogsToFetch = Number(e.target.value);
      setNumDogs(dogsToFetch);
      history.push(`/dogs?quantity=${dogsToFetch}`);
    },
    [history]
  );

  useEffect(() => {
    console.log('dogs props:', props);
  });

  return (
    <div className={styles.App}>
      <header className={styles['App-header']}>
        <h1>Welcome to Dogs!</h1>
        <div>
          <p>Dogs to fetch:</p>

          <Select
            labelId="label"
            id="select"
            value={numDogs}
            onChange={handleMenuClick}
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

export default Dogs;
