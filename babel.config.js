module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            assets: './src/assets',
            components: './src/components',
            context: './src/context',
            screens: './src/screens',
            styles: './src/styles',
            commons: './src/components/a-commons',
            loan: './src/components/b-loan',
            car: './src/components/c-car',
            onboarding: './src/components/d-onboarding',
            constants: './src/constants',

          },
        },
      ],
    ],
  };
};
