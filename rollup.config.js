import { terser } from "rollup-plugin-terser";

export default [
  {
    input: "lib/main.js",
    output: [
      {
        file: "dist/main.js",
        format: "iife",
        name: "Plete"
      },
      {
        file: "dist/main.min.js",
        format: "iife",
        name: "Plete",
        plugins: [terser()]
      },
      {
        file: "dist/main-cjs.js",
        format: "cjs"
      },
      {
        file: "dist/main-cjs.min.js",
        format: "cjs",
        plugins: [terser()]
      },
      {
        file: "dist/main-esm.js",
        format: "esm"
      },
      {
        file: "dist/main-esm.min.js",
        format: "esm",
        plugins: [terser()]
      }
    ]
  }
];
