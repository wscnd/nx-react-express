import React from 'react';

import {
  Dogs,
  DogsProps
} from './Dogs';

export default {
  component: Dogs,
  title: 'Dogs'
};

export const primary = () => {
  const props: DogsProps = {
    query: 'query'
  };

  return <Dogs query={props.query} />;
};
