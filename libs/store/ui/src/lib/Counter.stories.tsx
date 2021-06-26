import React from 'react';
import { Counter, CounterProps } from './Counter';

export default {
  component: Counter,
  title: 'Counter',
};

export const primary = () => {
  /* eslint-disable-next-line */
  const props: CounterProps = {};

  return <Counter />;
};
