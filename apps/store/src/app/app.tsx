import React, { Fragment } from 'react';

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
import { getAllGames } from '@nx-react-express/api';
import { Header } from '@nx-react-express/shared/components';
import { formatRating } from '@nx-react-express/shared/utils';
import { GameDetail } from '@nx-react-express/store/ui';

import styles from './app.module.scss';

export default function App() {
  const history = useHistory();
  return (
    <Fragment>
      <Header />
      <div className={styles.container}>
        <div className={styles['games-layout']}>
          {getAllGames().map((game) => (
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

      <Route path="/game/:id" component={GameDetail} />
    </Fragment>
  );
}
