import './GameDetail.module.scss';

import React, { useEffect } from 'react';

import { RouteComponentProps } from 'react-router-dom';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { useGetGameByIdQuery } from '@nx-react-express/redux/features/games/games-api-slice';
import { globalStyles } from '@nx-react-express/shared/styles';
import { Game } from '@nx-react-express/shared/types';
import { formatRating } from '@nx-react-express/shared/utils/formatters';

import styles from './GameDetail.module.scss';

type GameDetailParams = { id: string };

export type GameDetailProps = RouteComponentProps<GameDetailParams>;

export function GameDetail(props: GameDetailProps) {
  const {
    data: game = {} as Game,
    isFetching, // NOTE: first load only
    isLoading, // NOTE: Subsequent loading
    isError,
  } = useGetGameByIdQuery(props.match.params.id);

  /**
   * NOTE: could also use the useGetGameQuery hook
   */
  // const {
  //   data: game = [],
  //   isError,
  //   isFetching, // NOTE: first load only
  //   isLoading // NOTE: Subsequent loading
  // } = useGetGamesQuery();

  useEffect(() => {
    console.log('GameDetail props:', props);
  });

  if (isError) {
    return <div> Error loading data!</div>;
  }

  if (isFetching) {
    return <div>Fetching!</div>;
  }

  if (isLoading) {
    return <div>Loading!</div>;
  }

  return (
    <div className={`${globalStyles.container}`}>
      <Card>
        <CardActionArea>
          <CardMedia
            className={styles['game-card-media']}
            title={game.name}
            image={game.image}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              className={globalStyles['center-content']}
            >
              {isFetching
                ? 'Loading...'
                : `${game.name}: ${formatRating(game.rating)}`}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}

export default GameDetail;
