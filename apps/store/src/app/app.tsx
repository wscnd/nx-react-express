import React, {
  Fragment,
  useEffect,
  useState
} from 'react';

import {
  Route,
  useHistory
} from 'react-router-dom';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Header } from '@nx-react-express/shared/components';
import { globalStyles } from '@nx-react-express/shared/styles';
import type { Game } from '@nx-react-express/shared/types';
import { formatRating } from '@nx-react-express/shared/utils';
import { GameDetail } from '@nx-react-express/store/ui';

import styles from './app.module.scss';

export default function App() {
  const history = useHistory();
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    async function getGames() {
      const request = await fetch('/api/games');
      const { data }: { data: Game[] } = await request.json();
      setGames(data);
    }
    getGames();
  }, []);

  return (
    <Fragment>
      <Header />
      <div className={`${globalStyles.container}`}>
        <div className={styles['games-layout']}>
          {games.map((game) => (
            <Card
              key={game.id}
              className={styles['game-card']}
              onClick={() => history.push(`/game/${game.id}`)}
            >
              <CardActionArea>
                <CardMedia
                  className={styles['game-card-media']}
                  title={game.name}
                  image={game.image}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {game.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {game.description}
                  </Typography>

                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    className={styles['game-rating']}
                  >
                    <strong>Rating:</strong> {formatRating(game.rating)}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </div>
      </div>

      <Route path="/game/:id" render={(props) => <GameDetail {...props} />} />
    </Fragment>
  );
}
