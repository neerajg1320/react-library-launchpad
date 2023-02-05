#!/usr/bin/env node
const rollup = require('rollup');
const path = require('path');
const resolve = require('@rollup/plugin-node-resolve').default;
const babel = require('@rollup/plugin-babel').default;
const externals = require('rollup-plugin-node-externals');
const commonjs = require('@rollup/plugin-commonjs').default;
const postcss = require('rollup-plugin-postcss');

const currentWorkingPath = process.cwd();

// TBD: We have to support multiple entry points.
// TBD: Our script is configured for libraries, we have to make one for apps as well.
const { src, name } = require(path.join(currentWorkingPath, 'package.json'));

const inputPath = path.join(currentWorkingPath, src);

// Little workaround to get package name without scope
const fileName = name.replace('@glassball/', '');

// see below for details on the options
const inputOptions = {
  input: inputPath,
  plugins: [
    postcss({
      // Key configuration
      modules: true,
    }),
    babel({
      presets: ['@babel/preset-env', '@babel/preset-react'],
      babelHelpers: 'bundled',
    }),
    externals(),
    commonjs(),
    resolve(),
  ],
};

// These are to be defined in the "main" and "module" property in package.json
const outputOptions = [
  {
    file: `dist/${fileName}.cjs.js`,
    format: 'cjs',
  },
  {
    file: `dist/${fileName}.esm.js`,
    format: 'esm',
  },
];

async function build() {
  // create bundle
  const bundle = await rollup.rollup(inputOptions);
  // loop through the options and write individual bundles
  outputOptions.forEach(async (options) => {
    await bundle.write(options);
  });
}

build();