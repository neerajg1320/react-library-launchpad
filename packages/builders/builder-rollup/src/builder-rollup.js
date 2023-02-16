#!/usr/bin/env node
const rollup = require('rollup');
const path = require('path');
const resolve = require('@rollup/plugin-node-resolve').default;
const babel = require('@rollup/plugin-babel').default;
const externals = require('rollup-plugin-node-externals');
const commonjs = require('@rollup/plugin-commonjs').default;
const postcss = require('rollup-plugin-postcss');
const json = require('@rollup/plugin-json');
const {myDopePlugin} = require('../../plugins/rollup-plugin-mydopeplugin.js');

const currentWorkingPath = process.cwd();
const packageFilePath = path.join(currentWorkingPath, 'package.json');
// TBD: We have to support multiple entry points.
// TBD: Our script is configured for libraries, we have to make one for apps as well.
const { src, srcType, name, external } = require(packageFilePath);

if (!src) {
  throw(`Error! property 'src' is missing in '${packageFilePath}'`);
}

const cjsPresent = srcType && srcType.includes('cjs');

const inputPath = path.join(currentWorkingPath, src);

// Little workaround to get package name without scope
const fileName = name.replace('@glassball/', '');

let externalFiles = [];
if (external && external.length > 0) {
  externalFiles = external;
  console.log(`External Files:`, externalFiles);
}

// see below for details on the options
const inputOptions = {
  input: inputPath,
  external: externalFiles,
  plugins: [
    postcss({
      // Key configuration
      // TBD (Immediate)
      // modules: true,
    }),
    externals(),
    srcType ? commonjs({transformMixedEsModules:true}) : null, // needed for commonjs code
    resolve(),
    json(),
    babel({
      presets: ['@babel/preset-env', '@babel/preset-react'],
      babelHelpers: 'bundled',
    }),
    // myDopePlugin()
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
