import React, {
  Fragment,
  useEffect,
  useMemo,
  useState
} from 'react';

import {
  Link,
  Route,
  useHistory
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
  GameDetail,
  Games
} from '@nx-react-express/store/ui';

import styles from './app.module.scss';

export default function App() {
  const history = useHistory();

  const headerPages = useMemo(
    () => [
      { url: '/game', name: 'Games', id: 1 },
      { url: '/counter', name: 'Redux Examples', id: 2 }
    ],
    []
  );

  console.log(process.env);

  return (
    <Fragment>
      <Header pages={headerPages} />
      <div className={`${globalStyles.container}`}>
        <Route path="/game" render={(props) => <Games {...props} />} />
        <Route path="/game/:id" render={(props) => <GameDetail {...props} />} />
      </div>

      <Route path="/counter" render={(props) => <Counter {...props} />} />
    </Fragment>
  );
}
