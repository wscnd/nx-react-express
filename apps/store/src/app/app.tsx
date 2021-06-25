import React, {
  Fragment,
  useMemo
} from 'react';

import {
  Route,
  useLocation
} from 'react-router-dom';

import { Header } from '@nx-react-express/shared/components';
import { globalStyles } from '@nx-react-express/shared/styles/global-styles';
import {
  Counter,
  Dogs,
  GameDetail,
  Games
} from '@nx-react-express/store/ui';

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
