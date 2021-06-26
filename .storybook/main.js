module.exports = {
  stories: [],
  addons: [
    {
      name: '@storybook/addon-essentials',
      addons: ['@storybook/addon-controls'],
      options: {
        backgrounds: true
      }
    },
    'storybook-addon-material-ui'
  ],
  // Added to fix the bug:  https://github.com/styleguidist/react-docgen-typescript/issues/356
  typescript: {
    reactDocgen: 'react-docgen'
  }
};
