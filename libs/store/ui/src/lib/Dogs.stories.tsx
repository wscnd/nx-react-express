import React from 'react';

import {
  Meta,
  Story
} from '@storybook/react/types-6-0';

import {
  Dogs,
  DogsProps
} from './Dogs';
import styles from './Dogs.module.scss';

export default {
  classes: styles,
  component: Dogs,
  title: 'Dogs'
} as Meta;

const Template: Story<DogsProps> = (args) => <Dogs {...args} />;

export const Primary = Template.bind({});
