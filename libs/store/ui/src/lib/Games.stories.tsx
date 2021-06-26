import React from 'react';
import { Games, GamesProps } from './Games';

export default {
  component: Games,
  title: 'Games',
};

export const primary = () => {
  /* eslint-disable-next-line */
  const props: GamesProps = {};

  return <Games />;
};
