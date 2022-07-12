import babel from "rollup-plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import external from "rollup-plugin-peer-deps-external";
import { terser } from "rollup-plugin-terser";
import commonjs from "@rollup/plugin-commonjs";

export default [
  {
    input: "./src/main.js",
    output: [
      {
        file: "dist/index.js",
        format: "cjs",
      },
      {
        file: "dist/index.es.js",
        format: "es",
        exports: "named",
      },
    ],

    plugins: [
      babel({
        exclude: "node_modules/**",
      }),
      commonjs(),
      external(),
      resolve({
        extensions: [".js"],
      }),
      terser(),
    ],
  },
];