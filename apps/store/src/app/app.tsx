import React from 'react';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import { getAllGames } from '../fake-api';
import styles from './app.module.scss';

export function App() {
  // return <div className={styles.app}>Hi 👋</div>;
  return (
    <div className="container">
      <div className="games-layout">
        {getAllGames().map((game) => (
          <Card key={game.id} className="gamecard">
            <CardActionArea>
              <CardMedia
                className="game-card-media"
                image={game.image}
                title={game.name}
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
                  className="game-rating"
                >
                  <strong>Rating:</strong> {game.rating}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default App;
