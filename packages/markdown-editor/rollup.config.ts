/* eslint-disable import/no-extraneous-dependencies */
import nodeResolve from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser";
import typescript from "@rollup/plugin-typescript";
import { type Plugin, defineConfig } from "rollup";
import externals from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";

export default defineConfig({
  input: "./src/index.ts",
  output: [
    {
      dir: "./lib/esm",
      format: "es",
      sourcemap: true,
    },
    {
      dir: "./lib/cjs",
      format: "cjs",
      sourcemap: true,
    },
  ],
  plugins: [
    externals() as Plugin,
    nodeResolve(),
    terser(),
    typescript(),
    postcss({
      modules: {
        generateScopedName: "_[local]_[hash:base64:5]",
      },
      minimize: true,
      use: {
        sass: {
          silenceDeprecations: ["legacy-js-api"],
        },
        less: undefined,
        stylus: undefined,
      },
    }),
  ],
});
