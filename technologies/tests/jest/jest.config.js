// jest.config.js

// jest.config.js
// const { defaults: tsjPreset } = require('ts-jest/presets'); // no compila archivos js
const { jsWithTs: tsjPreset } = require('ts-jest/presets'); // sí compila archivos js
// const { jsWithBabel: tsjPreset } = require('ts-jest/presets'); // sí compila archivos js si se indican los presets de env y de react en .babelrc

module.exports = {
  // preset: 'ts-jest', // solo funciona este preset, ninguno de los otros dos funcionan - js-with-ts - js-with-babel
  // globals: {
  //   'ts-jest': {
  //     isolatedModules: false,
  //   },
  // },
  // verbose: true,
  // roots: ['src'],
  setupFilesAfterEnv: ['./jest.setup.ts'],
  // moduleFileExtensions: ['ts', 'tsx', 'js'],
  // testPathIgnorePatterns: ['node_modules/'],
  transform: {
    // '.(ts|tsx)': 'ts-jest', // este sí transpila archivos js
    // '.[t|j]sx?$': 'ts-jest', // este sí transpila archivos js
    // '.(ts|tsx)$': 'ts-jest', // este no transpila archivos js
    // '^.+\\.(ts|tsx)$': 'ts-jest', // este no transpila archivos js
    // '^.+\\.tsx?$': 'ts-jest', // este no transpila archivos js
    // '^.+\\.[t|j]sx?$': 'babel-jest', // este transpila correctamente si se indican los presets en el archivo .b
    // '^.+\\.mdx$': '@storybook/addon-docs/jest-transform-mdx',
  },
  transform: {
    ...tsjPreset.transform,
    // [...]
  },
  // testMatch: ['**/*.test.(js|ts|tsx)'],
  collectCoverage: true,
  moduleNameMapper: {
    // Mocks out all these file formats when tests are run.
    '\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      'identity-obj-proxy',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
};
