// See: https://rollupjs.org/introduction/

import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';

const config = {
  input: 'src/index.ts',
  output: {
    esModule: true,
    file: 'dist/index.js',
    format: 'es',
    sourcemap: true,
  },
  plugins: [
    typescript({
      outDir: 'dist',
      declaration: false,
      declarationMap: false,
    }),
    commonjs(),
    nodeResolve({ preferBuiltins: true }),
  ],
};

export default config;
