import babel from '@rollup/plugin-babel';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';
import path from "path";

const currentWorkingPath = process.cwd();

// TBD: we will get the path from package.json main property
const inputPath = path.join(currentWorkingPath, "src/index.js");

// The output is generated to bundlePath
const bundlePath = path.join(currentWorkingPath, "dist/bundle.js");

export default {
  input: inputPath,
  output: {
    file: bundlePath,
    format: "iife",
    sourcemap: true,
  },
  plugins: [
    nodeResolve({
      extensions: [".js"],
    }),
    replace({
      preventAssignment: true,
      'process.env.NODE_ENV': JSON.stringify( 'production' )
    }),
    babel({
      presets: ["@babel/preset-react"],
      babelHelpers: 'bundled',
    }),
    commonjs(),
  ]
};