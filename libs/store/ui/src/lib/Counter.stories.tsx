import React from 'react';

import {
  Meta,
  Story
} from '@storybook/react/types-6-0';

import {
  Counter,
  CounterProps
} from './Counter';

export default {
  component: Counter,
  title: 'Counter'
} as Meta;

const Template: Story<CounterProps> = (args) => <Counter {...args} />;

export const Primary = Template.bind({});
