import React from 'react';

import { createMemoryHistory } from 'history';
import {
  BrowserRouter,
  MemoryRouter,
  Route,
  Router
} from 'react-router-dom';

import {
  Meta,
  Story
} from '@storybook/react/types-6-0';

import { GameDetail } from './GameDetail';
import {
  Games,
  GamesProps
} from './Games';

export default {
  component: Games,
  title: 'Games',
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={['/game/']}>
        <Route path="/game" render={() => <Story />} />
        <Route path="/game/:id" render={(props) => <GameDetail {...props} />} />
      </MemoryRouter>
    )
  ]
} as Meta;

const Template: Story<GamesProps> = (args) => <Games {...args} />;

export const Primary = Template.bind({});
