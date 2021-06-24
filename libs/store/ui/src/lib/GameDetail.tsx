import './GameDetail.module.scss';

import React from 'react';

import { RouteComponentProps } from 'react-router-dom';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
// import styles from './GameDetail.module.scss';
import { globalStyles } from '@nx-react-express/shared/styles';

/* eslint-disable-next-line */

type GameDetailParams = { id: string };

export type GameDetailProps = RouteComponentProps<GameDetailParams>;

export function GameDetail(props: GameDetailProps) {
  return (
    <div className={`${globalStyles.container}`}>
      <Card>
        <CardActionArea>
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.match.params.id}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}

export default GameDetail;
