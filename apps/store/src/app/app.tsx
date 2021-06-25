import React, {
  Fragment,
  useEffect,
  useMemo,
  useState
} from 'react';

import {
  Link,
  Route,
  useHistory,
  useLocation
} from 'react-router-dom';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import {
  Header,
  HeaderProps
} from '@nx-react-express/shared/components';
import { globalStyles } from '@nx-react-express/shared/styles/global-styles';
import type { Game } from '@nx-react-express/shared/types';
import { formatRating } from '@nx-react-express/shared/utils/formatters';
import {
  Counter,
  Dogs,
  GameDetail,
  Games
} from '@nx-react-express/store/ui';

import styles from './app.module.scss';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function App() {
  const query = useQuery();
  console.log('query:', query);
  const headerPages = useMemo(
    () => [
      { url: '/game', name: 'Games', id: 1 },
      { url: '/counter', name: 'Counter ', id: 2 },
      { url: '/dogs', name: 'Dogs ', id: 3 }
    ],
    []
  );

  console.log(process.env);

  return (
    <Fragment>
      <Header pages={headerPages} title="Board Game Hoard" />
      <div className={`${globalStyles.container}`}>
        <Route path="/game" render={(props) => <Games {...props} />} />
        <Route path="/game/:id" render={(props) => <GameDetail {...props} />} />
      </div>
      <Route path="/counter" render={(props) => <Counter {...props} />} />
      <Route
        path="/dogs"
        render={(props) => <Dogs {...props} query={query.get('quantity')} />}
      />
    </Fragment>
  );
}
