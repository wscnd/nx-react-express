import '../../../shared/styles/src/lib/global-styles.module.scss';

import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { muiTheme } from 'storybook-addon-material-ui';

import { store } from '@nx-react-express/redux/store';

// export const parameters = {
//   actions: { argTypesRegex: '^on[A-Z].*' },
//   controls: {
//     matchers: {
//       color: /(background|color)$/i,
//       date: /Date$/,
//     },
//   },
// };

export const decorators = [
  (Story) => (
    <Provider store={store}>
      <Story />
    </Provider>
  ),
  // (Story) => (
  //   <MemoryRouter>
  //     <Story />
  //   </MemoryRouter>
  // ),
  muiTheme(),
];
