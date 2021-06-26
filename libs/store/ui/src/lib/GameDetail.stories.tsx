import React from 'react';

import {
  BrowserRouter,
  MemoryRouter,
  Route
} from 'react-router-dom';

import {
  Meta,
  Story
} from '@storybook/react/types-6-0';

import {
  GameDetail,
  GameDetailProps
} from './GameDetail';

export default {
  component: GameDetail,
  title: 'GameDetail',
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={['/game/']}>
        <Route path="/game/:id" render={(props) => <Story {...props} />} />
      </MemoryRouter>
      // <BrowserRouter>
      //   <Route path="/game/:id" render={(props) => <Story {...props} />} />
      // </BrowserRouter>
    )
  ]
} as Meta;

const Template: Story<GameDetailProps> = (args) => <GameDetail {...args} />;

export const Primary = Template.bind({});
