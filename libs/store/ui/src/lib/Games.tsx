import React, {
  useEffect,
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
import type { Game } from '@nx-react-express/shared/types';
import { formatRating } from '@nx-react-express/shared/utils/formatters';

import styles from './Games.module.scss';

/* eslint-disable-next-line */
export interface GamesProps {}
export function Games(props: GamesProps) {
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
              <Typography variant="body2" color="textSecondary" component="p">
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
  );
}

export default Games;
